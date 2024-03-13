import { Box, Container, Typography } from '@mui/material';
import usePage from '../../../hooks/usePage/usePage';
import ItemEpisode from '../../molecules/ItemEpisode/ItemEpisode';
import PaginationBox from '../../molecules/PaginationBox/PaginationBox';
import IEpisode from '../../../utils/interfaces/TMDB/IEpisode';
import { EPISODES_PER_PAGE } from '../../../utils/constants';
import './LibraryEpisodes.scss';

type LibraryEpisodesProps = {
  episodes: IEpisode[];
};

const LibraryEpisodes = ({ episodes }: LibraryEpisodesProps) => {
  const [state, dispatch] = usePage(
    1,
    episodes.length,
    Math.ceil(episodes.length / EPISODES_PER_PAGE),
  );
  const { page, count } = state;

  const handlePage = (newPage: number) => {
    dispatch({ type: 'SET_PAGE', page: newPage });
  };
  return (
    <Container className="library-episodes">
      <Typography className="library-episodes__title" variant="h4" gutterBottom>
        Episodes
      </Typography>
      <Box>
        {episodes.length > 0 ? (
          <Box>
            <PaginationBox page={page} count={count} handlePage={handlePage} />
            <Box className="library-episodes__items">
              {episodes
                .slice((page - 1) * EPISODES_PER_PAGE, page * EPISODES_PER_PAGE)
                .map((episode) => (
                  <ItemEpisode episode={episode} key={episode.episodeNumber} />
                ))}
            </Box>
          </Box>
        ) : (
          <Typography variant="h6">No episodes have been found...</Typography>
        )}
      </Box>
    </Container>
  );
};

export default LibraryEpisodes;
