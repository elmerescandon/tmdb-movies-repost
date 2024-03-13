import { Box } from '@mui/material';
import ICombinedCredits from '../../../utils/interfaces/TMDB/ICombinedCredits';
import './LibraryPersonCredits.scss';
import LibraryParticipation from '../LibraryParticipation/LibraryParticipation';

type LibraryPersonCreditsProps = {
  credits: ICombinedCredits;
};

const LibraryPersonCredits = ({ credits }: LibraryPersonCreditsProps) => {
  const { cast, crew } = credits;
  return (
    <Box className="library-person-credits">
      <LibraryParticipation parts={cast} title="As part of the cast" />
      <LibraryParticipation parts={crew} title="As part of the crew" />
    </Box>
  );
};

export default LibraryPersonCredits;
