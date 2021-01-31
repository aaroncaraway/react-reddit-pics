import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListItems from './ListItems';

function Dashboard() {
  return (
    <div className="dashboard">
      <Typography gutterBottom variant="h5" component="h2">
        Pretty Reddit
      </Typography>
      <ListItems />
    </div>
  );
}

export default Dashboard;
