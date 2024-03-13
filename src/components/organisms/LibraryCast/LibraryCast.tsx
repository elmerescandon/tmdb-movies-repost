import { Box, Typography } from '@mui/material';
import PaginationBox from '../../molecules/PaginationBox/PaginationBox';
import usePage from '../../../hooks/usePage/usePage';

import { ITEMS_PER_PAGE } from '../../../utils/constants';
import ICast from '../../../utils/interfaces/TMDB/ICast';
import ItemCredit from '../../molecules/ItemCredit/ItemCredit';
import './LibraryCast.scss';

type LibraryCastProps = {
  cast: ICast[];
};

const LibraryCast = ({ cast }: LibraryCastProps) => {
  const [stateCast, dispatchCast] = usePage(
    1,
    cast.length,
    Math.ceil(cast.length / ITEMS_PER_PAGE),
  );
  const { page: pageCast, count: countCast } = stateCast;

  const handlePage = (newPage: number) => {
    dispatchCast({ type: 'SET_PAGE', page: newPage });
  };

  return (
    <Box className="library-cast">
      <Typography variant="h4">Cast</Typography>
      <Box>
        {cast.length !== 0 ? (
          <Box className="library-cast__container">
            <Box className="library-cast__container__items">
              {cast
                .slice(
                  (pageCast - 1) * ITEMS_PER_PAGE,
                  pageCast * ITEMS_PER_PAGE,
                )
                .map((castMember) => (
                  <ItemCredit key={castMember.id} creditMember={castMember} />
                ))}
            </Box>
            <PaginationBox
              page={pageCast}
              count={countCast}
              handlePage={handlePage}
            />
          </Box>
        ) : (
          <Typography>Looks like no cast member was found</Typography>
        )}
      </Box>
    </Box>
  );
};

export default LibraryCast;
