import Header from '../../organisms/Header/Header';
import SectionMovies from '../../templates/SectionMovies/SectionMovies';
import SectionTVShows from '../../templates/SectionTVShows/SectionTVShows';
import './Home.scss';

const Home = () => (
  <div className="home">
    <Header />
    <div className="filmoteca">
      <SectionMovies />
      <SectionTVShows />
    </div>
  </div>
);

export default Home;
