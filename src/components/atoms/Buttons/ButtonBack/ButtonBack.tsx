import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ButtonBack = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Button variant="contained" onClick={handleBack}>
      Back
    </Button>
  );
};

export default ButtonBack;
