import { Box, Typography } from '@mui/material';
import IPersonCast from '../../../utils/interfaces/TMDB/IPersonCast';
import IPersonCrew from '../../../utils/interfaces/TMDB/IPersonCrew';
import ItemParticipation from '../../molecules/ItemParticipation/ItemParticipation';
import usePage from '../../../hooks/usePage/usePage';
import { ITEMS_PER_PAGE } from '../../../utils/constants';
import PaginationBox from '../../molecules/PaginationBox/PaginationBox';
import './LibraryParticipation.scss';

type LibraryParticipationProps = {
  parts: IPersonCast[] | IPersonCrew[];
  title: string;
};

const LibraryParticipation = ({ parts, title }: LibraryParticipationProps) => {
  const [state, dispatch] = usePage(
    1,
    parts.length,
    Math.ceil(parts.length / ITEMS_PER_PAGE),
  );
  const { page, count } = state;

  const handlePage = (newPage: number) => {
    dispatch({ type: 'SET_PAGE', page: newPage });
  };

  return (
    <Box className="library-participation">
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {parts.length > 0 ? (
        <Box className="library-person-credits">
          <Box className="library-person-credits__casts">
            {parts
              .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
              .map((participation) => {
                const role = 'character' in participation
                  ? participation.character
                  : participation.job;
                return (
                  <ItemParticipation
                    key={`${participation.id} ${role}  `}
                    participation={participation}
                  />
                );
              })}
          </Box>
          <PaginationBox page={page} count={count} handlePage={handlePage} />
        </Box>
      ) : (
        <Typography variant="h6">Looks no data was found...</Typography>
      )}
    </Box>
  );
};

export default LibraryParticipation;
