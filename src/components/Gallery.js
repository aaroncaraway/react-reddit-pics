/* eslint-disable react/prop-types */
import React from 'react';
import { v1 as uuid } from 'uuid';
import MediaCard from './MediaCard';

const Gallery = ({ photos }) => (
  <div className="dashboard-container">
    {photos && photos.map((item) => <MediaCard item={item} key={uuid()} />)}
  </div>
);

export default Gallery;
