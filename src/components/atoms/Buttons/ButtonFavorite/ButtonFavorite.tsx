import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

type ButtonFavoriteProps = {
  handleFavorite: () => void;
  isFavorite: boolean;
};

const ButtonFavorite = ({
  handleFavorite,
  isFavorite,
}: ButtonFavoriteProps) => (
  <Button
    className="button--favorite"
    variant={isFavorite ? 'outlined' : 'contained'}
    onClick={handleFavorite}
    startIcon={<FavoriteIcon />}
  >
    {isFavorite ? 'Remove' : 'Add'}
  </Button>
);

export default ButtonFavorite;
