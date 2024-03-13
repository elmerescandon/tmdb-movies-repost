import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import './ItemEpisode.scss';
import IEpisode from '../../../utils/interfaces/TMDB/IEpisode';

type ItemEpisodeProps = {
  episode: IEpisode;
};

const ItemEpisode = ({ episode }: ItemEpisodeProps) => {
  const {
    stillPath, name, overview, episodeNumber,
  } = episode;
  return (
    <Card
      sx={{
        backgroundColor: '#222222',
        color: '#f8f8f8',
        borderRadius: 4,
        height: 500,
        maxWidth: 300,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          alt={episode.name}
          image={
            stillPath !== undefined
              ? `http://image.tmdb.org/t/p/original${stillPath}`
              : ''
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="subtitle2">{`EP ${episodeNumber}`}</Typography>
          <Typography variant="body2">{overview}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemEpisode;
