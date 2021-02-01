/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
// import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageModal: {
    maxWidth: 500,
    '@media (min-width: 1280px)': {
      maxWidth: 1000,
    },
    height: 'auto',
  },
  modalBox: {
    backgroundColor: 'white',
  },
}));

export default function TransitionsModal({ item }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const title = item ? item.data.title : 'Test Post Plz Ignore';
  const photo = item ? item.data.url : 'Test Post Plz Ignore';
  const author = item ? item.data.author : 'Test Post Plz Ignore';

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        MORE INFO!
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
          <Box className={classes.modalBox}>
            <img src={photo} alt={title} className={classes.imageModal} />
            <Typography>{title}</Typography>
            <Typography>{author}</Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
