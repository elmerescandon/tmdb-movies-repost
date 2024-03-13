import './Loader.scss';

type LoaderProps = {
  size: number;
};

const Loader: React.FC<LoaderProps> = ({ size }: LoaderProps) => {
  const loaderSize: React.CSSProperties = {
    width: size,
    height: size,
  };
  return (
    <div className="loader" data-testid="loader-container" style={loaderSize}>
      {null}
    </div>
  );
};

export default Loader;
