import IGenre from '../IGenre';
import ICredit from './ICredit';
import IDiscover from './IDiscover';
import IImages from './IImages';
import IProductionCompany from './IProductionCompany';
import IProductionCountry from './IProductionCountry';
import ISpokenLanguage from './ISpokenLanguage';

interface IMovie {
  adult: boolean;
  backdropPath: string;
  belongsToCollection?: any;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdbId: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies: IProductionCompany[];
  productionCountries: IProductionCountry[];
  releaseDate: string;
  revenue: number;
  runtime: number;
  spokenLanguages: ISpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
  images: IImages;
  reviews: IDiscover;
  credits: ICredit;
  similar: IDiscover;
}

export default IMovie;
