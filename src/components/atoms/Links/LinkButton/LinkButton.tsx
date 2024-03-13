import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { Button } from '@mui/material';
import PageRoutes from '../../../../utils/routes/Routes';
import './LinkButton.scss';

type LinkButtonProps = {
  children: ReactNode;
  path: PageRoutes;
};

const LinkButton = ({ children, path }: LinkButtonProps) => (
  <Link className="link-button" to={path}>
    <Button size="large">{children}</Button>
  </Link>
);

export default LinkButton;
