import ILogin from '../../utils/interfaces/ILogin';
import {
  addParamsToDetailContent,
  addParamsToDiscoverMovies,
  addParamsToDiscoverTVShows,
  addParamsToPerson,
  addParamsToSearch,
  addParamsToSeason,
  userInfoToPost,
} from './TMDB.util';

describe('TMDB utils test', () => {
  test('Should add params to discover movies', () => {
    const testSearchParams = new URLSearchParams();
    const searchParams = new URLSearchParams();
    searchParams.append('_yearMov', '2015');
    searchParams.append('_certMov', 'R');
    searchParams.append('_genreMov', '1');
    searchParams.append('_pageMov', '3');

    addParamsToDiscoverMovies(testSearchParams, searchParams);
    expect(testSearchParams.get('page')).toBe('3');
    expect(testSearchParams.get('certification')).toBe('R');
    expect(testSearchParams.get('primary_release_year')).toBe('2015');
    expect(testSearchParams.get('with_genres')).toBe('1');
  });

  test('Should add params to discover tv shows', () => {
    const testSearchParams = new URLSearchParams();
    const searchParams = new URLSearchParams();
    searchParams.append('_yearTV', '1965');
    searchParams.append('_genreTV', '84');
    searchParams.append('_pageTV', '5');

    addParamsToDiscoverTVShows(testSearchParams, searchParams);
    expect(testSearchParams.get('page')).toBe('5');
    expect(testSearchParams.get('first_air_date_year')).toBe('1965');
    expect(testSearchParams.get('with_genres')).toBe('84');
  });

  test('Should add params to search', () => {
    const testSearchParams = new URLSearchParams();
    const searchParams = new URLSearchParams();
    searchParams.append('_search', 'hulk');
    searchParams.append('_page', '4');

    addParamsToSearch(testSearchParams, searchParams);
    expect(testSearchParams.get('query')).toBe('hulk');
    expect(testSearchParams.get('page')).toBe('4');
  });

  test('Should add params to detail content', () => {
    const testSearchParams = new URLSearchParams();
    addParamsToDetailContent(testSearchParams);
    expect(testSearchParams.get('language')).toBe('en-US');
    expect(testSearchParams.get('append_to_response')).toBe(
      'images,credits,reviews,similar',
    );
  });

  test('Should add params to season', () => {
    const testSearchParams = new URLSearchParams();
    addParamsToSeason(testSearchParams);
    expect(testSearchParams.get('language')).toBe('en-US');
  });

  test('Should add params to person', () => {
    const testSearchParams = new URLSearchParams();
    addParamsToPerson(testSearchParams);
    expect(testSearchParams.get('language')).toBe('en-US');
    expect(testSearchParams.get('append_to_response')).toBe('combined_credits');
  });

  test('Should convert user to info', () => {
    const userTest: ILogin = { id: '1', userName: 'test1', password: '123' };
    const responseTest = userInfoToPost(userTest);
    expect(responseTest.password).toBe('123');
    expect(responseTest.request_token).toBe('1');
    expect(responseTest.username).toBe('test1');
  });
});

export {};
