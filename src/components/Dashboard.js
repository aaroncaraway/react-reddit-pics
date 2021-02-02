import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
// import ListItems from './ListItems';
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
  navButtons: {
    float: 'right',
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
      console.log(result.data.data.children, subreddit);
      setData({ photos: result.data.data.children });
      setLoading(false);
    };
    fetchData();
  }, [subreddit, query]);

  // const filterData = () => {
  //   const filteredPhotos = data.photos.filter((photo) => photo.data.title.includes('.'));
  //   console.log(filteredPhotos);
  //   setData({ photos: filteredPhotos });
  // };

  const changeSub = () => {
    setLoading(true);
    setSubreddit('catsstandingup');

    setQuery(null);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(searchTerm);
    // OLD -- Filtering simply on words in the title
    // const filteredPhotos = data.photos.filter((photo) => photo.data.title.includes('.'));
    setQuery(searchTerm);
  };

  return (
    <div className="dashboard">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Prettier Reddit Pics
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={handleSubmit}>
              <InputBase
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </form>
          </div>
          <Button className={classes.navButton} onClick={() => changeSub()}>
            CHANGE SUB
          </Button>
        </Toolbar>
        {/* <Button onClick={() => filterData()}>BUTTON</Button> */}

        {/* <Button onClick={() => search()}>SEARCH</Button> */}
      </AppBar>
      {loading ? (
        <Typography gutterBottom variant="h5" component="h2">
          ...loading
        </Typography>
      ) : (
        <>
          <Gallery photos={data.photos} />
        </>
      )}
    </div>
  );
}

export default Dashboard;
