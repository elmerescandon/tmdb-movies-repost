import { Container, Typography } from '@mui/material';
import Header from '../../organisms/Header/Header';
import './Error.scss';

const Error = () => (
  <div className="error-page">
    <Header />
    <Container>
      <Typography variant="h3">
        Oh no, looks like you entered the wrong page. Please return to home
        pressing on the masks!
      </Typography>
    </Container>
  </div>
);

export default Error;
