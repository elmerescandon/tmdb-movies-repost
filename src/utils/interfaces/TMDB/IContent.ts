import IKnownFor from './IKnowFor';

interface IContent {
  adult?: boolean;
  backdropPath?: string | null;
  genreIds?: number[];
  id: number;
  mediaType: string;
  originalLanguage?: string;
  originalTitle?: string;
  overview?: string;
  popularity: number;
  posterPath?: string;
  releaseDate?: string;
  title?: string;
  video?: boolean;
  voteAverage?: number;
  voteCount?: number;
  firstAirDate?: string;
  name?: string;
  originCountry?: string[];
  originalName?: string;
  gender?: number;
  knownFor?: IKnownFor[];
  knownForDepartment?: string;
  profilePath?: string;
}
export default IContent;
