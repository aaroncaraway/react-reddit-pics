/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { v1 as uuid } from 'uuid';
// import Typography from '@material-ui/core/Typography';
import MediaCard from './MediaCard';

const Gallery = ({ photos }) => (
  <div className="dashboard-container">
    items go here
    {photos && photos.map((item) => <MediaCard item={item} />)}
  </div>
);

export default Gallery;
