import IGenre from '../IGenre';
import IAuthor from './IAuthor';
import ICredit from './ICredit';
import IDiscover from './IDiscover';
import IImages from './IImages';
import ILastEpisodeToAir from './ILastEpisodeToAir';
import IProductionCompany from './IProductionCompany';
import IProductionCountry from './IProductionCountry';
import IDiscoverSeason from './IDiscoverSeason';
import ISpokenLanguage from './ISpokenLanguage';

interface ITVShow {
  adult: boolean;
  backdropPath: string;
  createdBy: IAuthor[];
  episodeRunTime: number[];
  firstAirDate: string;
  genres: IGenre[];
  homepage: string;
  id: number;
  inProduction: boolean;
  languages: string[];
  lastAirDate: string;
  lastEpisodeToAir: ILastEpisodeToAir;
  name: string;
  nextEpisodeToAir?: any;
  networks: IProductionCompany[];
  numberOfEpisodes: number;
  numberOfSeasons: number;
  originCountry: string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies: IProductionCompany[];
  productionCountries: IProductionCountry[];
  seasons: IDiscoverSeason[];
  spokenLanguages: ISpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  voteAverage: number;
  voteCount: number;
  images: IImages;
  credits: ICredit;
  reviews: IDiscover;
  similar: IDiscover;
}

export default ITVShow;
