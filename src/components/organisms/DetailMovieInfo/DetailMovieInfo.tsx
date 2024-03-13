import { Box } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import DetailTags from '../../molecules/DetailTags/DetailTags';
import IGenre from '../../../utils/interfaces/IGenre';
import ISpokenLanguage from '../../../utils/interfaces/TMDB/ISpokenLanguage';
import { genresToTags, languagesToTags } from '../../../utils/helpers';
import './DetailMovieInfo.scss';

type DetailMovieInfoProps = {
  genres: IGenre[];
  spokenLanguages: ISpokenLanguage[];
  runtime: number;
};

const DetailMovieInfo = ({
  genres,
  spokenLanguages,
  runtime,
}: DetailMovieInfoProps) => (
  <Box className="detail-movie-info">
    <DetailTags icon={<MovieIcon />} tags={genresToTags(genres)} />
    <DetailTags
      icon={<ScheduleIcon />}
      tags={[{ id: 1, tag: String(runtime) }]}
    />
    <DetailTags
      icon={<VolumeUpIcon />}
      tags={languagesToTags(spokenLanguages)}
    />
  </Box>
);

export default DetailMovieInfo;
