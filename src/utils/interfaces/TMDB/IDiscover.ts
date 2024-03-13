import IAuthor from './IAuthor';
import IContent from './IContent';
import IDiscoverMovie from './IDiscoverMovie';
import IDiscoverTVShow from './IDiscoverTVShow';
import IReview from './IReview';

interface IDiscover {
  page: number;
  results: IDiscoverMovie[] | IDiscoverTVShow[] | IContent[] | IAuthor[] | IReview[];
  totalPages: number;
  totalResults: number;
}
export default IDiscover;
