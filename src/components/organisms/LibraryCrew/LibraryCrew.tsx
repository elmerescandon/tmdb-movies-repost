import { Box, Typography } from '@mui/material';
import PaginationBox from '../../molecules/PaginationBox/PaginationBox';
import usePage from '../../../hooks/usePage/usePage';
import ICrew from '../../../utils/interfaces/TMDB/ICrew';
import { ITEMS_PER_PAGE } from '../../../utils/constants';
import ItemCredit from '../../molecules/ItemCredit/ItemCredit';
import './LibraryCrew.scss';

type LibraryCrewProps = {
  crew: ICrew[];
};

const LibraryCrew = ({ crew }: LibraryCrewProps) => {
  const [stateCrew, dispatchCrew] = usePage(
    1,
    crew.length,
    Math.ceil(crew.length / ITEMS_PER_PAGE),
  );
  const { page: pageCrew, count: countCrew } = stateCrew;

  const handlePage = (newPage: number) => {
    dispatchCrew({ type: 'SET_PAGE', page: newPage });
  };

  return (
    <Box className="library-crew">
      <Typography variant="h4">Crew</Typography>
      <Box>
        {crew.length !== 0 ? (
          <Box className="library-crew__container">
            <Box className="library-cast__container__items">
              {crew
                .slice(
                  (pageCrew - 1) * ITEMS_PER_PAGE,
                  pageCrew * ITEMS_PER_PAGE,
                )
                .map((crewMember) => (
                  <ItemCredit
                    key={`${crewMember.id} ${crewMember.job}`}
                    creditMember={crewMember}
                  />
                ))}
            </Box>

            <PaginationBox
              page={pageCrew}
              count={countCrew}
              handlePage={handlePage}
            />
          </Box>
        ) : (
          <Typography>Looks like no crew member was found</Typography>
        )}
      </Box>
    </Box>
  );
};

export default LibraryCrew;
