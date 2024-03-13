import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { State } from '../../../state/store';
import ISeason from '../../../utils/interfaces/TMDB/ISeason';
import DetailThumbnail from '../../organisms/DetailThumbnail/DetailThumbnail';
import LibraryEpisodes from '../../organisms/LibraryEpisodes/LibraryEpisodes';
import MenuGeneric from '../../organisms/MenuGeneric/MenuGeneric';
import './SectionSeason.scss';

type SectionSeasonProps = {
  season: ISeason;
};

const SectionSeason = ({ season }: SectionSeasonProps) => {
  const tvShowState = useSelector((state: State) => state.tvShow);
  const {
    name, airDate, posterPath, episodes,
  } = season;
  return (
    <Box className="section-season">
      <DetailThumbnail
        backdropPath={posterPath}
        title={`${tvShowState.name}: ${name}`}
        releaseDate={airDate}
      >
        <MenuGeneric />
      </DetailThumbnail>
      <LibraryEpisodes episodes={episodes} />
    </Box>
  );
};

export default SectionSeason;
