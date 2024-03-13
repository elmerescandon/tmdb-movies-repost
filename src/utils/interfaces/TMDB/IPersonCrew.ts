interface IPersonCrew {
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
  creditId: string;
  department: string;
  job: string;
  mediaType: string;
  originCountry?: string[];
  originalName?: string;
  firstAirDate?: string;
  name?: string;
  episodeCount?: number;
}

export default IPersonCrew;
