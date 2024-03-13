import React from 'react';
import { Box, Typography } from '@mui/material';
import IReview from '../../../utils/interfaces/TMDB/IReview';

type ItemReviewProps = {
  review: IReview;
};

const ItemReview = ({ review }: ItemReviewProps) => {
  const { author, authorDetails, content } = review;
  return (
    <Box>
      <Box>
        <Typography variant="h6">{author}</Typography>
        <Typography>
          {authorDetails.rating !== undefined ? authorDetails.rating : 'None'}
        </Typography>
      </Box>
      <Typography variant="body1">{content}</Typography>
    </Box>
  );
};

export default ItemReview;
