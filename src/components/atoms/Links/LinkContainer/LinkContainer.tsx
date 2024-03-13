import { Link } from 'react-router-dom';
import './LinkContainer.scss';

type LinkContainerProps = {
  children: React.ReactNode;
  path: string
};

const LinkContainer = ({ children, path } : LinkContainerProps) => (
  <Link className="link-container" to={path}>
    {children}
  </Link>
);

export default LinkContainer;
