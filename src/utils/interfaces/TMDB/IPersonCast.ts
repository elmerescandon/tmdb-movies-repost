interface IPersonCast {
  adult: boolean;
  backdropPath?: string | null;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle?: string;
  overview: string;
  popularity: number;
  posterPath?: string | null;
  releaseDate?: string;
  title?: string;
  video?: boolean;
  voteAverage: number;
  voteCount: number;
  character: string;
  creditId: string;
  order?: number;
  mediaType: string;
  originCountry?: string[];
  originalName?: string;
  firstAirDate?: string;
  name?: string;
  episodeCount?: number;
}

export default IPersonCast;
