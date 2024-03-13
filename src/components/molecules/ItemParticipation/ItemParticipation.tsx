import { Box } from '@mui/material';
import IPersonCast from '../../../utils/interfaces/TMDB/IPersonCast';
import IPersonCrew from '../../../utils/interfaces/TMDB/IPersonCrew';
import LinkContainer from '../../atoms/Links/LinkContainer/LinkContainer';
import { getParticipationPath } from '../../../utils/helpers';

const participationDefault = require('../../../images/movieTesting.jpg');

type ItemParticipationProps = {
  participation: IPersonCast | IPersonCrew;
};

const ItemParticipation = ({ participation }: ItemParticipationProps) => {
  const {
    mediaType, id, title, backdropPath, name,
  } = participation;

  const imageURL = backdropPath !== null
    ? `http://image.tmdb.org/t/p/original${backdropPath}`
    : participationDefault;

  return (
    <LinkContainer path={getParticipationPath(mediaType, id)}>
      <Box
        className="item-movie"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)),
    url(${imageURL})`,
        }}
      >
        <div className="item-movie__title">
          {mediaType === 'movie' ? title : name}
        </div>
      </Box>
    </LinkContainer>
  );
};

export default ItemParticipation;
