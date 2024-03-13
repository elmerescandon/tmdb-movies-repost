import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { getYearFromReleaseDate } from '../../../utils/helpers';
import './DetailThumbnail.scss';

const detailDefault = require('../../../images/movieTesting.jpg');

type DetailThumbnailProps = {
  backdropPath: string;
  title: string;
  releaseDate: string | null;
  children: ReactNode;
};

const DetailThumbnail = ({
  backdropPath,
  title,
  releaseDate,
  children,
}: DetailThumbnailProps) => {
  const imageURL = backdropPath !== null
    ? `http://image.tmdb.org/t/p/original${backdropPath}`
    : detailDefault;
  return (
    <Box
      sx={{
        marginTop: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
      className="detail-thumbnail"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 1)),
        url(${imageURL})`,
      }}
    >
      {children}
      <Box className="detail-thumbnail--titles">
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h4">
          {releaseDate ? getYearFromReleaseDate(releaseDate) : ''}
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailThumbnail;
