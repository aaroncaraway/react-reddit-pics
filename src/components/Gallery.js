/* eslint-disable react/prop-types */
import React from 'react';
import MediaCard from './MediaCard';

const Gallery = ({ photos }) => (
  <div className="dashboard-container">
    {photos && photos.map((item) => <MediaCard key={item.data.id} item={item} />)}
  </div>
);

export default Gallery;
