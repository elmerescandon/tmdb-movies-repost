import { Container } from '@mui/material';
import IPerson from '../../../utils/interfaces/TMDB/IPerson';
import DetailPersonInfo from '../../organisms/DetailPersonInfo/DetailPersonInfo';
import MenuGeneric from '../../organisms/MenuGeneric/MenuGeneric';
import LibraryPersonCredits from '../../organisms/LibraryPersonCredits/LibraryPersonCredits';
import './DetailPerson.scss';

type DetailPersonProps = {
  person: IPerson;
};

const DetailPerson = ({ person }: DetailPersonProps) => {
  const { combinedCredits } = person;
  return (
    <Container className="detail-person">
      <MenuGeneric />
      <DetailPersonInfo person={person} />
      <LibraryPersonCredits credits={combinedCredits} />
    </Container>
  );
};

export default DetailPerson;
