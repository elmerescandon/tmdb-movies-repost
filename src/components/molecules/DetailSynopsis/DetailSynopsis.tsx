import { Box, Typography } from '@mui/material';
import './DetailSynopsis.scss';

type DetailSynopsisProps = {
  synopsis: string;
};

const DetailSynopsis = ({ synopsis }: DetailSynopsisProps) => (
  <Box className="detail-synopsis">
    <Typography variant="h5" gutterBottom>Synopsis</Typography>
    <Typography variant="body1" gutterBottom>{synopsis}</Typography>
  </Box>
);

export default DetailSynopsis;
