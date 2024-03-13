import IEpisode from './IEpisode';

interface ISeason {
  _id: string;
  airDate: string;
  episodes: IEpisode[];
  name: string;
  overview: string;
  id: number;
  posterPath: string;
  seasonNumber: number;
}
export default ISeason;
