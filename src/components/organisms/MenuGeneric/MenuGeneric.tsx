import { Container } from '@mui/material';
import ButtonBack from '../../atoms/Buttons/ButtonBack/ButtonBack';

const MenuGeneric = () => (
  <Container
    sx={{
      display: 'flex',
      flexDirection: 'row-reverse',
      gap: 3,
      paddingBottom: 3,
      paddingTop: 3,
    }}
  >
    <ButtonBack />
  </Container>
);

export default MenuGeneric;
