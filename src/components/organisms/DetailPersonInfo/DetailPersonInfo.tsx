import { Box, Typography } from '@mui/material';
import IPerson from '../../../utils/interfaces/TMDB/IPerson';
import './DetailPersonInfo.scss';

type DetailPersonInfoProps = {
  person: IPerson;
};

const Profile = require('../../../images/unknown.png');

const DetailPersonInfo = ({ person }: DetailPersonInfoProps) => {
  const {
    name,
    profilePath,
    birthday,
    placeOfBirth,
    knownForDepartment,
    alsoKnownAs,
  } = person;
  return (
    <Box className="detail-person-info">
      <img
        className="detail-person-info__image"
        src={
          profilePath != null
            ? `http://image.tmdb.org/t/p/original${profilePath}`
            : Profile
        }
        alt={name}
      />
      <Box className="detail-person-info__details">
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1">{`Also known as: ${alsoKnownAs.join(',')}`}</Typography>
        <Typography variant="subtitle1">{`Birthday: ${birthday}`}</Typography>
        <Typography variant="subtitle1">{`Place of birthday: ${placeOfBirth}`}</Typography>
        <Typography variant="subtitle1">{`Known for: ${knownForDepartment}`}</Typography>
      </Box>
    </Box>
  );
};
export default DetailPersonInfo;
