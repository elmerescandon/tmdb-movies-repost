import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tvShowSetTitle } from '../../../state/action-creators/TVShowActionCreators';
import DetailThumbnail from '../../organisms/DetailThumbnail/DetailThumbnail';
import DetailSynopsis from '../../molecules/DetailSynopsis/DetailSynopsis';
import DetailTVShowInfo from '../../organisms/DetailTVShowInfo/DetailTVShowInfo';
import MenuTVShow from '../../organisms/MenuTVShow/MenuTVShow';
import DetailCredits from '../DetailCredits/DetailCredits';
import DetailReviews from '../DetailReviews/DetailReviews';
import ITVShow from '../../../utils/interfaces/TMDB/ITVShow';
import DetailSimilarTVShows from '../DetailSimilarTVShows/DetailSimilarTVShows';
import DetailSeasons from '../DetailSeasons/DetailSeasons';
import './DetailShow.scss';

type DetailShowProps = {
  tvShow: ITVShow;
};

const DetailShow = ({ tvShow }: DetailShowProps) => {
  const dispatch = useDispatch();
  const {
    backdropPath,
    credits,
    firstAirDate,
    id,
    genres,
    name,
    numberOfSeasons,
    overview,
    reviews,
    seasons,
    similar,
    spokenLanguages,
  } = tvShow;

  useEffect(() => {
    dispatch(tvShowSetTitle(name));
  });

  return (
    <Box className="detail-tv-show">
      <DetailThumbnail
        backdropPath={backdropPath}
        title={name}
        releaseDate={firstAirDate}
      >
        <MenuTVShow tvShowItem={{ id, title: name, backdropPath }} />
      </DetailThumbnail>
      <Container className="detail-movie__additional">
        <DetailTVShowInfo
          genres={genres}
          seasons={numberOfSeasons}
          spokenLanguages={spokenLanguages}
        />
        <DetailSynopsis synopsis={overview} />
      </Container>
      <DetailSeasons seasons={seasons} tvShowId={id} tvShowName={name} />
      <DetailCredits credits={credits} />
      <DetailReviews reviews={reviews} />
      <DetailSimilarTVShows
        similar={similar}
        titleContainer="Similar TV Shows"
      />
    </Box>
  );
};

export default DetailShow;
