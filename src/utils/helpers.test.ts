import {
  genresToSelect,
  certificationsToSelect,
  isValidReleaseYear,
  getYearFromReleaseDate,
  genresToTags,
  languagesToTags,
  getParticipationPath,
  addSearchParamsDiscoverMovie,
  addSearchParamsDiscoverTVShow,
  updateSearchParams,
  accountToInfo,
} from './helpers';
import ICertification from './interfaces/ICertification';
import IGenre from './interfaces/IGenre';
import IMovieParams from './interfaces/IMovieParams';
import ISearchParams from './interfaces/ISearchParams';
import IShowParams from './interfaces/IShowParams';
import ISpokenLanguage from './interfaces/TMDB/ISpokenLanguage';
import mockAccountDetails from './testing/mocks/mockAccountDetails';

describe('Helpers testing', () => {
  test('Should test genres to select', () => {
    const genreTest = [
      { id: 1, name: 'hello' },
      { id: 2, name: 'goodbye' },
    ];
    const selectTest = genresToSelect(genreTest);
    expect(selectTest.length).toBe(2);
    expect(selectTest[0].value).toBe('1');
    expect(selectTest[1].label).toBe('goodbye');
  });

  test('Should test certifications to select', () => {
    const certificationTest: ICertification[] = [
      { certification: 'PG', meaning: 'Good', order: 1 },
      { certification: 'R', meaning: 'Not Good', order: 2 },
    ];
    const selectTest = certificationsToSelect(certificationTest);
    expect(selectTest.length).toBe(2);
    expect(selectTest[0].value).toBe('PG');
    expect(selectTest[1].label).toBe('R');
  });

  test('Should is valid release year', () => {
    expect(isValidReleaseYear('hello')).toBe(false);
    expect(isValidReleaseYear('2015')).toBe(true);
    expect(isValidReleaseYear('2015  ')).toBe(false);
    expect(isValidReleaseYear('2198')).toBe(true);
  });

  test('Should get year from release year', () => {
    expect(getYearFromReleaseDate('2015-04-10')).toBe('2015');
    expect(getYearFromReleaseDate('1956-10-31')).toBe('1956');
    expect(getYearFromReleaseDate('')).toBe('');
  });

  test('Should genres to tags', () => {
    const genreTest: IGenre[] = [
      { id: 1, name: 'hello' },
      { id: 2, name: 'goodbye' },
    ];
    const tagsTest = genresToTags(genreTest);
    expect(tagsTest.length).toBe(2);
    expect(tagsTest[0].id).toBe(1);
    expect(tagsTest[1].tag).toBe('goodbye');
  });

  test('Should languages to tags', () => {
    const languagesTest: ISpokenLanguage[] = [
      { englishName: 'English', name: 'English', iso_639_1: 'en' },
      { englishName: 'Spanish', name: 'Español', iso_639_1: 'es' },
    ];
    const tagsTest = languagesToTags(languagesTest);
    expect(tagsTest.length).toBe(2);
    expect(tagsTest[0].id).toBe(0);
    expect(tagsTest[1].tag).toBe('Español');
  });

  test('Should get participation path', () => {
    expect(getParticipationPath('movie', 3)).toBe('/movie/3');
    expect(getParticipationPath('tv', 103)).toBe('/show/103');
    expect(getParticipationPath('soap', 103)).toBe('/');
  });

  test('Should add params to discover movie', () => {
    const testParams: IMovieParams = {
      certification: 'R',
      genre: '14',
      page: 4,
      primaryReleaseYear: '2015',
    };
    const testURLSeach = new URLSearchParams();
    const searchParams = addSearchParamsDiscoverMovie(testParams, testURLSeach);
    expect(searchParams.get('_pageMov')).toBe('4');
    expect(searchParams.get('_certMov')).toBe('R');
    expect(searchParams.get('_genreMov')).toBe('14');
    expect(searchParams.get('_yearMov')).toBe('2015');
  });

  test('Should add params to discover tv show', () => {
    const testParams: IShowParams = {
      genre: '40',
      page: 1,
      primaryReleaseYear: '2000',
    };
    const testURLSeach = new URLSearchParams();
    const searchParams = addSearchParamsDiscoverTVShow(testParams, testURLSeach);
    expect(searchParams.get('_pageTV')).toBe('1');
    expect(searchParams.get('_genreTV')).toBe('40');
    expect(searchParams.get('_yearTV')).toBe('2000');
  });

  test('Should update search params', () => {
    const testParams : ISearchParams = {
      page: 3,
      search: 'spiderman',
    };
    const testURLSeach = new URLSearchParams();
    const searchParams = updateSearchParams(testParams, testURLSeach);
    expect(searchParams.get('_search')).toBe('spiderman');
    expect(searchParams.get('_page')).toBe('3');
  });

  test('Should account to info', () => {
    const accountTest = mockAccountDetails;
    const userTest = accountToInfo(accountTest, '123');
    expect(userTest.id).toBe('548');
    expect(userTest.name).toBe('Travis Bell');
    expect(userTest.userName).toBe('travisbell');
  });
});
