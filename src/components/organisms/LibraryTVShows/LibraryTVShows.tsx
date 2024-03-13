import { Box } from '@mui/material';
import React from 'react';
import IDiscoverTVShow from '../../../utils/interfaces/TMDB/IDiscoverTVShow';
import ItemTVShow from '../../molecules/ItemTVShow/ItemTVShow';
import './LibraryTVShows.scss';

type LibraryTVShowsProps = {
  tvShows: IDiscoverTVShow[];
};

const LibraryTVShows = ({ tvShows }: LibraryTVShowsProps) => (
  <Box className="library-tv-shows">
    {tvShows.map((tvShow) => (
      <ItemTVShow key={tvShow.id} tvShow={tvShow} />
    ))}
  </Box>
);
export default LibraryTVShows;
