import ILogin from '../../utils/interfaces/ILogin';
import IMarkFavorite from '../../utils/interfaces/IMarkFavorite';

export const addParamsToDiscoverMovies = (
  URLParams: URLSearchParams,
  params: URLSearchParams,
) => {
  const yearRelease = params.has('_yearMov') ? params.get('_yearMov') : '';
  const certification = params.has('_certMov') ? params.get('_certMov') : '';
  const genre = params.has('_genreMov') ? params.get('_genreMov') : '';
  const page = params.has('_pageMov') ? params.get('_pageMov') : '';

  URLParams.append('language', 'en-US');
  URLParams.append('sort-by', 'popularity.desc');
  URLParams.append('include_adult', 'false');
  URLParams.append('include_video', 'false');
  URLParams.append('certification_country', 'US');

  if (yearRelease !== '') URLParams.append('primary_release_year', yearRelease as string);
  if (certification !== '') URLParams.append('certification', certification as string);
  if (genre !== '') URLParams.append('with_genres', genre as string);
  if (page !== '') URLParams.append('page', page as string);
};

export const addParamsToDiscoverTVShows = (
  URLParams: URLSearchParams,
  params: URLSearchParams,
) => {
  const yearRelease = params.has('_yearTV') ? params.get('_yearTV') : '';
  const genre = params.has('_genreTV') ? params.get('_genreTV') : '';
  const page = params.has('_pageTV') ? params.get('_pageTV') : '';

  if (genre !== '') URLParams.append('with_genres', genre as string);
  if (yearRelease !== '') URLParams.append('first_air_date_year', yearRelease as string);
  if (page !== '') URLParams.append('page', page as string);
};

export const addParamsToSearch = (
  URLParams: URLSearchParams,
  params: URLSearchParams,
) => {
  const search = params.has('_search') ? params.get('_search') : '';
  const page = params.has('_page') ? params.get('_page') : '';

  if (search !== '') URLParams.append('query', search as string);
  if (page !== '') URLParams.append('page', page as string);
  URLParams.append('language', 'en-US');
  URLParams.append('region', 'US');
  URLParams.append('include_adult', 'false');
};

export const addParamsToDetailContent = (URLParams: URLSearchParams) => {
  URLParams.append('language', 'en-US');
  URLParams.append('append_to_response', 'images,credits,reviews,similar');
};

export const addParamsToSeason = (URLParams: URLSearchParams) => {
  URLParams.append('language', 'en-US');
};

export const addParamsToPerson = (URLParams: URLSearchParams) => {
  URLParams.append('language', 'en-US');
  URLParams.append('append_to_response', 'combined_credits');
};

export const userInfoToPost = (userInfo: ILogin) => ({
  username: userInfo.userName,
  password: userInfo.password,
  request_token: userInfo.id,
});

export const favoriteToBody = (favoriteItem : IMarkFavorite) => {
  const { mediaType, favorite, mediaId } = favoriteItem;
  return ({ media_type: mediaType, media_id: mediaId, favorite });
};

export const favoriteParams = (URLParams: URLSearchParams, sessionId : string) => {
  URLParams.append('language', 'en-US');
  URLParams.append('sort-by', 'popularity.desc');
  URLParams.append('session_id', sessionId);
  URLParams.append('page', '1');
};
