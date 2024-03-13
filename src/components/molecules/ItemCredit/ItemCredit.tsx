import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import ICrew from '../../../utils/interfaces/TMDB/ICrew';
import ICast from '../../../utils/interfaces/TMDB/ICast';
import './ItemCredit.scss';
import LinkContainer from '../../atoms/Links/LinkContainer/LinkContainer';
import PageRoutes from '../../../utils/routes/Routes';

const Profile = require('../../../images/unknown.png');

type ItemCreditProps = {
  creditMember: ICrew | ICast;
};

const ItemCredit = ({ creditMember }: ItemCreditProps) => {
  const { originalName, profilePath, id } = creditMember;
  const role = 'job' in creditMember ? creditMember.job : creditMember.character;
  return (
    <LinkContainer path={`${PageRoutes.PERSON}/${id}`}>
      <Card
        sx={{
          maxWidth: 180,
          width: 180,
          height: 320,
          backgroundColor: '#222222',
          color: '#f8f8f8',
          borderRadius: 4,
        }}
      >
        <CardMedia
          sx={{ height: 180 }}
          image={
            profilePath != null
              ? `http://image.tmdb.org/t/p/original${profilePath}`
              : Profile
          }
          title={originalName}
        />
        <CardContent>
          <Typography variant="subtitle1">{originalName}</Typography>
          <Typography
            sx={{ fontStyle: 'italic', color: '#bcbcbc' }}
            variant="body1"
          >
            {role}
          </Typography>
        </CardContent>
      </Card>
    </LinkContainer>
  );
};

export default ItemCredit;
