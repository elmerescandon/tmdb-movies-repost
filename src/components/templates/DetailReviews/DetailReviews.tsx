import { Box, Container, Typography } from '@mui/material';
import IDiscover from '../../../utils/interfaces/TMDB/IDiscover';
import ItemReview from '../../molecules/ItemReview/ItemReview';
import IReview from '../../../utils/interfaces/TMDB/IReview';
import './DetailReviews.scss';

type DetailReviewsProps = {
  reviews: IDiscover;
};

const DetailReviews = ({ reviews }: DetailReviewsProps) => {
  const { results } = reviews;
  return (
    <Container>
      <Box className="detail-reviews">
        <Typography variant="h4" gutterBottom>
          Reviews
        </Typography>
        <Box>
          {results.length !== 0 ? (
            results.map((review) => (
              <ItemReview
                key={(review as IReview).id}
                review={review as IReview}
              />
            ))
          ) : (
            <Typography variant="subtitle1">
              Nobody reviewed this yet
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default DetailReviews;
