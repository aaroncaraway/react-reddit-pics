/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
// import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 1000,
    '@media (min-width: 1280px)': {
      width: 500,
    },
  },
  imageModal: {
    maxWidth: 500,
    '@media (min-width: 1280px)': {
      maxWidth: 1000,
    },
    height: 'auto',
  },
}));

export default function TransitionsModal({ item }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const title = item ? item.data.title : 'Test Post Plz Ignore';
  const photo = item ? item.data.url : 'Test Post Plz Ignore';

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        react-transition-group
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <img src={photo} alt={title} className={classes.imageModal} />
        </Fade>
      </Modal>
    </div>
  );
}
