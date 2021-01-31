import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v1 as uuid } from 'uuid';
import MediaCard from './MediaCard';

const ListItems = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ photos: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://www.reddit.com/r/pics/.json?jsonp=');
      console.log(result.data.data.children);
      setData({ photos: result.data.data.children });
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className="dashboard-container">
          {data.photos && data.photos.map((item) => <MediaCard key={uuid()} item={item} />)}
        </div>
      )}
    </>
  );
};

export default ListItems;
