import IUserFavoriteItem from '../state/state-interfaces/User/IUserFavoriteItem';
import IUserInfo from '../state/state-interfaces/User/IUserInfo';
import ICertification from './interfaces/ICertification';
import IGenre from './interfaces/IGenre';
import IMenuItem from './interfaces/IMenuItem';
import IMovieParams from './interfaces/IMovieParams';
import ISearchParams from './interfaces/ISearchParams';
import IShowParams from './interfaces/IShowParams';
import IAccount from './interfaces/TMDB/IAccount';
import IDiscoverMovie from './interfaces/TMDB/IDiscoverMovie';
import IDiscoverTVShow from './interfaces/TMDB/IDiscoverTVShow';
import ISpokenLanguage from './interfaces/TMDB/ISpokenLanguage';
import PageRoutes from './routes/Routes';

export const genresToSelect = (genres: IGenre[]): IMenuItem[] =>
  genres.map((genre) => ({ value: String(genre.id), label: genre.name }));

export const certificationsToSelect = (
  certifications: ICertification[],
): IMenuItem[] =>
  certifications.map((certification) => ({
    value: certification.certification,
    label: certification.certification,
  }));

export const isValidReleaseYear = (text: string) => {
  if (/^\d+$/.test(text)) {
    return true;
  }
  return false;
};

export const getYearFromReleaseDate = (releaseDate: string): string => {
  if (releaseDate === '') return '';
  const arrReleaseDate = releaseDate.split('-');
  const movieDate = new Date(
    parseInt(arrReleaseDate[0], 10),
    parseInt(arrReleaseDate[1], 10),
    parseInt(arrReleaseDate[2], 10),
  );

  return String(movieDate.getFullYear());
};

export const genresToTags = (genres: IGenre[]) =>
  genres.map((genre) => ({ id: genre.id, tag: genre.name }));

export const languagesToTags = (spokenLanguages: ISpokenLanguage[]) =>
  spokenLanguages.map((language, index) => ({ id: index, tag: language.name }));

export const getParticipationPath = (mediaType: string, id: number) => {
  if (mediaType === 'movie') return `${PageRoutes.MOVIE}/${String(id)}`;
  if (mediaType === 'tv') return `${PageRoutes.TV_SHOW}/${String(id)}`;
  return PageRoutes.HOME;
};

export const addSearchParamsDiscoverMovie = (
  params: IMovieParams,
  searchParams: URLSearchParams,
): URLSearchParams => {
  const newSearchParams = new URLSearchParams(searchParams);
  const {
    certification, genre, page, primaryReleaseYear,
  } = params;
  const paramArr: [string, string][] = [];

  if (page !== null) {
    paramArr.push(['_pageMov', String(page)]);
  }

  if (certification !== null) {
    newSearchParams.delete('_certMov');
    if (certification !== '') paramArr.push(['_certMov', certification]);
  }

  if (genre !== null) {
    newSearchParams.delete('_genreMov');
    if (genre !== '') paramArr.push(['_genreMov', genre]);
  }

  if (primaryReleaseYear !== null) {
    newSearchParams.delete('_yearMov');
    if (primaryReleaseYear !== '') paramArr.push(['_yearMov', primaryReleaseYear]);
  }

  paramArr.forEach(([key, value]: [string, string]) =>
    newSearchParams.set(key, value));
  return newSearchParams;
};

export const addSearchParamsDiscoverTVShow = (
  params: IShowParams,
  searchParams: URLSearchParams,
): URLSearchParams => {
  const newSearchParams = new URLSearchParams(searchParams);
  const { genre, primaryReleaseYear, page } = params;
  const paramArr: [string, string][] = [];

  if (page !== null) {
    paramArr.push(['_pageTV', String(page)]);
  }

  if (genre !== null) {
    newSearchParams.delete('_genreTV');
    if (genre !== '') paramArr.push(['_genreTV', genre]);
  }

  if (primaryReleaseYear !== null) {
    newSearchParams.delete('_yearTV');
    if (primaryReleaseYear !== '') paramArr.push(['_yearTV', primaryReleaseYear]);
  }

  paramArr.forEach(([key, value]: [string, string]) =>
    newSearchParams.set(key, value));
  return newSearchParams;
};

export const updateSearchParams = (
  params: ISearchParams,
  currentSearchParams: URLSearchParams,
) => {
  const newSearchParams = new URLSearchParams(currentSearchParams);
  const { search, page } = params;

  if (search !== null) {
    newSearchParams.delete('_search');
    if (search !== '') newSearchParams.set('_search', search);
  }

  if (page !== null) {
    newSearchParams.delete('_page');
    newSearchParams.set('_page', String(page));
  }

  return newSearchParams;
};

export const accountToInfo = (
  accountDetails: IAccount,
  sessionId: string,
): IUserInfo => {
  const { id, name, username } = accountDetails;
  return {
    id: String(id),
    sessionId,
    name,
    userName: username,
  };
};

export const discoverToFavoriteItem = (
  items: IDiscoverMovie[] | IDiscoverTVShow[],
): IUserFavoriteItem[] =>
  items.map((item) => ({
    id: item.id,
    title: 'title' in item ? item.title : item.name,
    backdropPath: item.backdropPath as string,
  }));
