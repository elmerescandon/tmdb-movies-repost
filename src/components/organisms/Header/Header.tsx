import { Box } from '@mui/material';
import LinkHome from '../../atoms/Links/LinkHome/LinkHome';
import UserBar from '../../molecules/UserBar/UserBar';
import NavigationBar from '../../molecules/NavigationBar/NavigationBar';
import './Header.scss';

const Header = () => (
  <Box className="header">
    <LinkHome />
    <Box className="header__navigation">
      <UserBar />
      <NavigationBar />
    </Box>
  </Box>
);

export default Header;
