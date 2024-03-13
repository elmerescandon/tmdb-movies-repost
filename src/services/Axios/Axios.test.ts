import AxiosFetch from './Axios.service';
import mockServer from '../../utils/testing/mockServer';
import '@testing-library/jest-dom/extend-expect';

describe('Testing axios', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  const axiosService = AxiosFetch.getInstance();

  it('Should only create one component', () => {
    const axiosServiceTest = AxiosFetch.getInstance();
    expect(axiosService).toStrictEqual(axiosServiceTest);
  });

  it('Should provide and error', async () => {
    try {
      await AxiosFetch.GETMethod('www.nothing.com/noError');
    } catch (e) {
      expect((e as Error).message).toBe('');
    }

    try {
      await AxiosFetch.POSTMethod('www.nothing.com/noError', '');
    } catch (e) {
      expect((e as Error).message).toBe('');
    }
  });
});

export {};
