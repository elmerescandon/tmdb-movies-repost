import { Box } from '@mui/material';
import LinkButton from '../../atoms/Links/LinkButton/LinkButton';
import PageRoutes from '../../../utils/routes/Routes';

const NavigationBar = () => (
  <Box>
    <LinkButton path={PageRoutes.SEARCH}>Search</LinkButton>
  </Box>
);

export default NavigationBar;
