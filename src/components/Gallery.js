/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
// import { v1 as uuid } from 'uuid';
import MediaCard from './MediaCard';
// useMemo(() => <Child1 a={a} />, [a]);
const Gallery = ({ photos }) => (
  <div className="dashboard-container">
    {photos &&
      photos.map((item) => useMemo(() => <MediaCard item={item} key={item.id} />, [photos]))}
  </div>
);

export default Gallery;
