import IUserInfo from '../../state/state-interfaces/User/IUserInfo';
import ILogin from '../../utils/interfaces/ILogin';
import IMarkFavorite from '../../utils/interfaces/IMarkFavorite';
import ISession from '../../utils/interfaces/TMDB/ISession';
import mockServer from '../../utils/testing/mockServer';
import TMDBService from './TMDB.service';

describe('TMDB service tests', () => {
  const service = TMDBService.getInstance();
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());

  test('Should get discovered movies', async () => {
    const testSearchParams = new URLSearchParams();

    const data = await service.discoverMovies(testSearchParams);
    expect(data).not.toBeNull();
    expect(data.results.length).toBe(20);
    expect(data.totalPages).toBe(36662);
    expect(data.totalResults).toBe(733224);
  });

  test('Should get discovered tv show', async () => {
    const testSearchParams = new URLSearchParams();

    const data = await service.discoverTVShows(testSearchParams);
    expect(data).not.toBeNull();
    expect(data.results.length).toBe(20);
    expect(data.totalPages).toBe(7125);
    expect(data.totalResults).toBe(142487);
  });

  test('Should get search data', async () => {
    const testSearchParams = new URLSearchParams();
    testSearchParams.append('_search', 'hulk');
    const data = await service.searchContent(testSearchParams);
    if (data !== undefined) {
      expect(data).not.toBeNull();
      expect(data.results.length).toBe(20);
      expect(data.totalPages).toBe(5);
      expect(data.totalResults).toBe(91);
    }
  });

  test('Should get no search', async () => {
    const testSearchParams = new URLSearchParams();
    const data = await service.searchContent(testSearchParams);
    expect(data).toBe(undefined);
  });

  test('Should get individual movie', async () => {
    const data = await service.getMovie('411');
    expect(data).not.toBeNull();
    expect(data.id).toBe(411);
  });

  test('Should get individual tv show', async () => {
    const data = await service.getShow('119051');
    expect(data).not.toBeNull();
    expect(data.id).toBe(119051);
  });

  test('Should get individual season from tv show', async () => {
    const data = await service.getSeason({ seasonId: '1', showId: '2153' });
    expect(data).not.toBeNull();
    expect(data.id).toBe(6565);
  });

  test('Should get individual person', async () => {
    const data = await service.getPerson('7624');
    expect(data).not.toBeNull();
    expect(data.id).toBe(7624);
  });

  test('Should get receive a request token', async () => {
    const data = await service.getRequestToken();
    expect(data).not.toBeNull();
    expect(data.success).toBe(true);
  });

  test('Should create a session id with request token', async () => {
    const mockUserLogin: ILogin = {
      id: '1234564789',
      password: 'mock123',
      userName: 'mockMock',
    };
    const data = await service.createSession(mockUserLogin) as ISession;
    expect(data).not.toBeNull();
    expect(data.sessionId).toBe('enabledSession123456789');
  });

  test('Should get Account details', async () => {
    const data = await service.getAccountDetails('enabledSession123456789');
    expect(data).not.toBeNull();
    expect(data.name).toBe('Travis Bell');
    expect(data.id).toBe(548);
  });

  test('Should mark favorite movies', async () => {
    const favoriteItemTest : IMarkFavorite = { favorite: true, mediaId: 124, mediaType: 'movie' };
    const userInfoTest : IUserInfo = {
      id: '123', name: 'raul', sessionId: 'abc', userName: 'raulo',
    };
    const data = await service.markFavorite(favoriteItemTest, userInfoTest);
    expect(data).not.toBeNull();
    expect(data.statusCode).toBe(12);
  });

  test('Should give favorite movies', async () => {
    const data = await service.getFavoriteMovies('123', 'abc');
    expect(data).not.toBeNull();
    expect(data.results.length).toBe(20);
    expect(data.totalPages).toBe(36662);
    expect(data.totalResults).toBe(733224);
  });

  test('Should give favorite shows', async () => {
    const data = await service.getFavoriteTVShows('123', 'abc');
    expect(data).not.toBeNull();
    expect(data.results.length).toBe(20);
    expect(data.totalPages).toBe(7125);
    expect(data.totalResults).toBe(142487);
  });
});
export {};
