import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import PageRoutes from './Routes';

type ProtectedRouteProps = {
  valid: boolean;
  path: string;
  children: ReactElement;
};

const ProtectedRoute = ({
  valid,
  path = PageRoutes.HOME,
  children,
}: ProtectedRouteProps): ReactElement => {
  if (!valid) {
    return <Navigate to={path} replace />;
  }

  return children;
};

export default ProtectedRoute;
