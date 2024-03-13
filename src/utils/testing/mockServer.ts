import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockDiscoverMovie from './mocks/mockDiscoverMovie';
import mockDiscoverTVShow from './mocks/mockDiscoverTVShow';
import mockSearchContent from './mocks/mockSearchContent';
import mockMovie from './mocks/mockMovie';
import mockTVShow from './mocks/mockTVShow';
import mockSeason from './mocks/mockSeason';
import mockPerson from './mocks/mockPerson';
import mockRequestToken from './mocks/mockRequestToken';
import mockRequestResponse from './mocks/mockRequestResponse';
import mockGetSession from './mocks/mockGetSession';
import mockAccountDetails from './mocks/mockAccountDetails';
import mockResponseFavorite from './mocks/mockResponseFavorite';

const tvShowRegex = /^https:\/\/api\.themoviedb\.org\/3\/tv\/\d+(\?api_key=\w+&language=\w+&append_to_response=\w+(%2C\w+)*)?$/;
const tvSeasonRegex = /^https:\/\/api\.themoviedb\.org\/3\/tv\/\d+\/season\/\d+(\?api_key=\w+&language=\w+)?$/;
const createSession = /^https:\/\/api\.themoviedb\.org\/3\/authentication\/token\/validate_with_login(\?api_key=\w+)?$/;
const getSessionId = /^https:\/\/api\.themoviedb\.org\/3\/authentication\/session\/new(\?api_key=\w+&request_token=\w+)?$/;
const accountDetails = /^https:\/\/api\.themoviedb\.org\/3\/account(\?api_key=\w+)?$/;
const markFavorite = /\/3\/account\/\d+\/favorite/i;
const getFavoriteMovies = /\/3\/account\/\d+\/favorite\/movies/i;
const getFavoriteShows = /\/3\/account\/\d+\/favorite\/tv/i;

const mockServer = setupServer(
  rest.post(createSession, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockRequestResponse))),
  rest.post(markFavorite, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockResponseFavorite))),
  rest.post('*', (req, res, ctx) =>
    res(ctx.status(404), ctx.json({ response: 'Please add a request handler' }))),

  rest.get(/3\/discover\/movie/i, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockDiscoverMovie))),
  rest.get(/3\/discover\/tv/i, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockDiscoverTVShow))),

  rest.get(/3\/search\/multi/i, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockSearchContent))),
  rest.get(/3\/movie\//i, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockMovie))),
  rest.get(tvSeasonRegex, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockSeason))),
  rest.get(tvShowRegex, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockTVShow))),
  rest.get(/3\/person\//i, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockPerson))),

  rest.get(getSessionId, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockGetSession))),
  rest.get(/3\/authentication\/token\/new/i, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockRequestToken))),
  rest.get(getFavoriteMovies, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockDiscoverMovie))),
  rest.get(getFavoriteShows, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockDiscoverTVShow))),
  rest.get(accountDetails, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockAccountDetails))),

  rest.get('www.nothing.com/noError', (req, res, ctx) =>
    res(ctx.status(404), ctx.json({ response: null }))),
  rest.get('*', (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ response: 'Please add a request handler' }))),

);

export default mockServer;
