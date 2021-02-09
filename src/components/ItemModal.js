/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'vw',
    height: 'vh',
    backgroundColor: theme.palette.common.white,
    textAlign: 'center',
  },
  imageModalBox: {
    margin: '0 auto',
    textAlign: 'center',
    '&:active': {
      outline: 'none',
    },
  },
  imageModal: {
    padding: 10,
    maxWidth: 340,
    maxHeight: 500,
    '@media (min-width: 1280px)': {
      maxWidth: 500,
    },
    height: 'auto',
  },
  modalBoxTitle: {
    padding: 10,
    fontSize: '1.5em',
    maxWidth: 340,
    '@media (min-width: 1280px)': {
      maxWidth: 500,
    },
  },
  modalBox: {
    backgroundColor: theme.palette.common.white,
  },
  button: {
    backgroundColor: '#3F51B5',
    '&:hover': {
      backgroundColor: fade('#3F51B5', 0.75),
    },
    color: theme.palette.common.white,
  },
}));

export default function TransitionsModal({ item }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const actualItem = item.data ? item.data : 'Test Post Plz Ignore';

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen} className={classes.button}>
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
            <div className={classes.imageModalBox}>
              <img src={actualItem.url} alt={actualItem.title} className={classes.imageModal} />
            </div>

            <Typography className={classes.modalBoxTitle}>{actualItem.title}</Typography>
            <Typography>Author: {actualItem.author}</Typography>
            <Typography>Upvotes: {actualItem.ups}</Typography>
            <Typography>Ratio Upvotes to Downvotes: {actualItem.upvote_ratio}</Typography>
            <Typography>
              Number of Awards Given (total): {actualItem.total_awards_received}
            </Typography>
            <Box pb="10px" />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
