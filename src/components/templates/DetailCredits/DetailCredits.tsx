import { Container } from '@mui/material';
import LibraryCast from '../../organisms/LibraryCast/LibraryCast';
import ICredit from '../../../utils/interfaces/TMDB/ICredit';
import LibraryCrew from '../../organisms/LibraryCrew/LibraryCrew';
import './DetailCredits.scss';

type DetailCreditsProps = {
  credits: ICredit;
};

const DetailCredits = ({ credits }: DetailCreditsProps) => {
  const { cast, crew } = credits;

  return (
    <Container className="detail-credits">
      <LibraryCast cast={cast} />
      <LibraryCrew crew={crew} />
    </Container>
  );
};

export default DetailCredits;
