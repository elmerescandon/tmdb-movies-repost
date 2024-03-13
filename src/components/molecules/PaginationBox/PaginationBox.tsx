import { Box, Pagination } from '@mui/material';
import './PaginationBox.scss';

type PaginationBoxProps = {
  page: number;
  count: number;
  handlePage: (page: number) => void;
};

const PaginationBox = ({ page, count, handlePage }: PaginationBoxProps) => {
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number,
  ) => {
    handlePage(newPage);
  };
  return (
    <Box className="pagination-box">
      <Pagination
        size="large"
        count={count}
        page={page}
        onChange={handleChangePage}
        color="primary"
        defaultPage={1}
      />
    </Box>
  );
};

export default PaginationBox;
