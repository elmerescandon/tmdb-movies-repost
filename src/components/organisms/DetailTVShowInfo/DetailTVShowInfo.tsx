import { Box } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import DetailTags from '../../molecules/DetailTags/DetailTags';
import IGenre from '../../../utils/interfaces/IGenre';
import { genresToTags, languagesToTags } from '../../../utils/helpers';
import './DetailTVShowInfo.scss';
import ISpokenLanguage from '../../../utils/interfaces/TMDB/ISpokenLanguage';

type DetailTVShowInfoProps = {
  genres: IGenre[];
  seasons: number;
  spokenLanguages: ISpokenLanguage[];
};

const DetailTVShowInfo = ({
  genres,
  seasons,
  spokenLanguages,
}: DetailTVShowInfoProps) => (
  <Box className="detail-tv-show-info">
    <DetailTags icon={<MovieIcon />} tags={genresToTags(genres)} />
    <DetailTags
      icon={<ScheduleIcon />}
      tags={[{ id: 1, tag: `${seasons} Seasons` }]}
    />
    <DetailTags
      icon={<VolumeUpIcon />}
      tags={languagesToTags(spokenLanguages)}
    />
  </Box>
);

export default DetailTVShowInfo;
