import { Box, Typography } from '@mui/material';
import IContent from '../../../utils/interfaces/TMDB/IContent';
import './LibrarySearch.scss';
import IDiscoverMovie from '../../../utils/interfaces/TMDB/IDiscoverMovie';
import LibraryMovie from '../LIbraryMovie/LibraryMovie';
import LibraryTVShows from '../LibraryTVShows/LibraryTVShows';
import IDiscoverTVShow from '../../../utils/interfaces/TMDB/IDiscoverTVShow';

type LibrarySearchProps = {
  content: IContent[];
};

const LibrarySearch = ({ content }: LibrarySearchProps) => {
  const movies = content.filter((item) => item.mediaType === 'movie');
  const tvShows = content.filter((item) => item.mediaType === 'tv');
  return (
    <Box className="library-search">
      <Typography variant="h4" gutterBottom>Movies</Typography>
      {movies.length === 0 ? (
        <Typography variant="subtitle1">No data found</Typography>
      ) : (
        <LibraryMovie movies={movies as IDiscoverMovie[]} />
      )}
      <Typography variant="h4" gutterBottom>TV Shows</Typography>
      {tvShows.length === 0 ? (
        <Typography variant="subtitle1">No data found</Typography>
      ) : (
        <LibraryTVShows tvShows={tvShows as IDiscoverTVShow[]} />
      )}
    </Box>
  );
};
export default LibrarySearch;
