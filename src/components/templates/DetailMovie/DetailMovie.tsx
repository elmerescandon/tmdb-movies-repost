import { Box, Container } from '@mui/material';
import DetailMovieInfo from '../../organisms/DetailMovieInfo/DetailMovieInfo';
import DetailThumbnail from '../../organisms/DetailThumbnail/DetailThumbnail';
import IMovie from '../../../utils/interfaces/TMDB/IMovie';
import DetailSynopsis from '../../molecules/DetailSynopsis/DetailSynopsis';
import DetailCredits from '../DetailCredits/DetailCredits';
import DetailReviews from '../DetailReviews/DetailReviews';
import DetailSimilarMovies from '../DetailSimilarMovies/DetailSimilarMovies';
import MenuMovie from '../../organisms/MenuMovie/MenuMovie';
import './DetailMovie.scss';

type DetailMovieProps = {
  movie: IMovie;
};

const DetailMovie = ({ movie }: DetailMovieProps) => {
  const {
    backdropPath,
    credits,
    genres,
    id,
    originalTitle,
    overview,
    releaseDate,
    reviews,
    runtime,
    similar,
    spokenLanguages,
  } = movie;
  return (
    <Box className="detail-movie">
      <DetailThumbnail
        title={originalTitle}
        backdropPath={backdropPath}
        releaseDate={releaseDate}
      >
        <MenuMovie movieItem={{ id, title: originalTitle, backdropPath }} />
      </DetailThumbnail>
      <Container className="detail-movie__additional">
        <DetailMovieInfo
          genres={genres}
          spokenLanguages={spokenLanguages}
          runtime={runtime}
        />
        <DetailSynopsis synopsis={overview} />
      </Container>
      <DetailCredits credits={credits} />
      <DetailReviews reviews={reviews} />
      <DetailSimilarMovies similar={similar} titleContainer="Similar movies" />
    </Box>
  );
};
export default DetailMovie;
