import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Gallery from './Gallery';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ photos: [] });
  const [subreddit, setSubreddit] = useState('pics');
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // const result = await axios(`https://www.reddit.com/${subreddit}/.json`);
      // const url = `https://www.reddit.com/r/${subreddit}/.json?jsonp=`;

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

  const filterData = () => {
    const filteredPhotos = data.photos.filter((photo) => photo.data.title.includes('.'));
    console.log(filteredPhotos);
    setData({ photos: filteredPhotos });
  };

  const changeSub = () => {
    // const filteredPhotos = data.photos.filter((photo) => photo.data.title.includes('.'));
    // console.log(filteredPhotos);
    setSubreddit('catsstandingup');
    setQuery(null);
  };

  const search = () => {
    // const filteredPhotos = data.photos.filter((photo) => photo.data.title.includes('.'));
    // console.log(filteredPhotos);
    setQuery('dogs');
  };

  return (
    <>
      {loading ? (
        <Typography gutterBottom variant="h5" component="h2">
          ...loading
        </Typography>
      ) : (
        <>
          <Button onClick={() => filterData()}>BUTTON</Button>
          <Button onClick={() => changeSub()}>CHANGE SUB</Button>
          <Button onClick={() => search()}>SEARCH</Button>
          <Gallery photos={data.photos} />
        </>
      )}
    </>
  );
}

export default Dashboard;
