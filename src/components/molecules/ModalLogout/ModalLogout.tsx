import {
  Backdrop,
  Box, Button, Modal, Typography,
} from '@mui/material';
import './ModalLogout.scss';

type ModalLogoutProps = {
  isOpen: boolean;
  handleLogout: (logout: boolean) => void;
};

const ModalLogout = ({ isOpen, handleLogout }: ModalLogoutProps) => {
  const handleYes = () => {
    handleLogout(true);
  };

  const handleNo = () => {
    handleLogout(false);
  };
  return (
    <Modal
      open={isOpen}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box className="modal-logout">
        <Box>
          <Typography>Are you sure you want to log out?</Typography>
        </Box>
        <Box className="modal-logout__options">
          <Button onClick={handleYes} variant="contained">
            Yes
          </Button>
          <Button onClick={handleNo} variant="outlined">
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalLogout;
