interface IEpisode {
  airDate: string;
  episodeNumber: number;
  id: number;
  name: string;
  overview: string;
  productionCode: string;
  runtime: number;
  seasonNumber: number;
  showId: number;
  stillPath?: string | null;
  voteAverage: number;
  voteCount: number;
  crew: any[];
  guestStars: any[];
}
export default IEpisode;
