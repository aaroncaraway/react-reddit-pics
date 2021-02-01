import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ListItems from './ListItems';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 525,
    margin: '20px 5px 5px 20px',
  },
  media: {
    height: 345,
    width: 345,
  },
});

function Dashboard() {
  const classes = useStyles();
  return (
    <div className="dashboard">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Prettier Reddit Pics
          </Typography>
        </Toolbar>
      </AppBar>
      <ListItems />
    </div>
  );
}

export default Dashboard;
