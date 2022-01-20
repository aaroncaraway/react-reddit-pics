// eslint-disable jsx-props-no-spreading
import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Gallery from './Gallery';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  navButton: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.75),
    },
    color: '#3F51B5',
    fontWeight: 'bold',
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.common.white,
  },
  form: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginBlockEnd: '0em',
  },
  subMenu: {
    zIndex: '2',
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ photos: [] });
  const [subreddit, setSubreddit] = useState('pics');
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = query
        ? `https://www.reddit.com/r/${subreddit}/search.json?q=${query}&restrict_sr=on&include_over_18=on&sort=relevance&t=all`
        : `https://www.reddit.com/r/${subreddit}/.json?jsonp=`;
      const result = await axios(url);
      // console.log(result.data.data.children);
      setData({ photos: result.data.data.children });
      console.log(result.data.data.children);
      setLoading(false);
    };
    fetchData();
  }, [subreddit, query]);

  // const filterData = () => {
  //   testing to see if my filter returns all titles with a period
  //   const filteredPhotos = data.photos.filter((photo) => photo.data.title.includes('.'));
  //   console.log(filteredPhotos);
  //   setData({ photos: filteredPhotos });
  // };

  const changeInput = (value) => {
    setSearchTerm(value);
  };

  const changeSub = () => {
    setLoading(true);
    const newSub = subreddit === 'catsstandingup' ? 'pics' : 'catsstandingup';
    setSubreddit(newSub);

    setQuery(null);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(searchTerm);
    // OLD -- Filtering simply on words in the title
    // const filteredPhotos = data.photos.filter((photo) => photo.data.title.includes('.'));
    setQuery(searchTerm);
  };

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleSubChange = (event, sub) => {
    setSubreddit(sub);
    handleClose(event);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const goHome = () => {
    setQuery(null);
    setSubreddit('pics');
  };

  const photoGallery = useMemo(() => <Gallery photos={data.photos} />, [data.photos]);
  return (
    <div className="dashboard">
      <AppBar position="static">
        <Toolbar>
          <Button onClick={goHome}>
            <Typography variant="h6" className={classes.title}>
              Prettier Reddit Pics!!
            </Typography>
          </Button>
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                onChange={(e) => {
                  changeInput(e.target.value);
                }}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </form>
          <Button className={classes.navButton} onClick={() => changeSub()}>
            CHANGE SUB
          </Button>
          <div className={classes.subMenu}>
            <Button
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              className={classes.navButton}
            >
              SHOW ME ANIMALS WITH JOBS!
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          onClick={(e) => handleSubChange(e, 'dogswithjobs')}
                          value="dogswithjobs"
                        >
                          Dogs With Jobs
                        </MenuItem>
                        <MenuItem
                          onClick={(e) => handleSubChange(e, 'catswithjobs')}
                          value="catswithjobs"
                        >
                          Cats With Jobs
                        </MenuItem>
                        <MenuItem
                          onClick={(e) => handleSubChange(e, 'turtleswithjobs')}
                          value="turtleswithjobs"
                        >
                          Turtles With Jobs
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Toolbar>

        {/* <Button onClick={() => filterData()}>BUTTON</Button> */}
      </AppBar>
      {loading ? (
        <Typography gutterBottom variant="h5" component="h2">
          ...loading
        </Typography>
      ) : (
        <>{photoGallery}</>
      )}
    </div>
  );
}

export default Dashboard;
