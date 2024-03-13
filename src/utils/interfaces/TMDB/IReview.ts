import IAuthor from './IAuthor';

interface IReview {
  author: string;
  authorDetails: IAuthor;
  content: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  url: string;
}
export default IReview;
