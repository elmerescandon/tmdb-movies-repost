import { Link } from 'react-router-dom';
import PageRoutes from '../../../../utils/routes/Routes';
import './LinkHome.scss';

const masks = require('../../../../images/masks.png');

const LinkHome = () => (
  <div className="link-home">
    <Link className="link-home__link" to={PageRoutes.HOME}>
      <div className="link-home__container">
        <img className="link-home__container__image" src={masks} alt="home-icon" />
      </div>
    </Link>
  </div>
);

export default LinkHome;
