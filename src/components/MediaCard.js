/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { v1 as uuid } from 'uuid';
// import ItemModal from './ItemModal';

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    height: 525,
    margin: '20px 5px 20px 5px',
  },
  media: {
    height: 340,
    width: 340,
  },
});

export default function MediaCard({ item }) {
  const classes = useStyles();
  const photoUrl = `https://www.reddit.com/${item.data.permalink}`;
  const selfText = item.data.selftext;
  const hasPhoto =
    item.data.url.indexOf('.jpg') !== -1 ||
    (item.data.url.indexOf('.gif') !== -1 && item.data.url.indexOf('.gifv') === -1) ||
    item.data.url.indexOf('.png') !== -1;
  const clippedTitle =
    item.data.title.length > 50 ? `${item.data.title.substring(0, 50)}...` : item.data.title;

  return (
    <div key={uuid()}>
      {selfText.length < 2 && hasPhoto && (
        <Card className={classes.root}>
          <CardActionArea target="_blank" href={photoUrl}>
            <CardMedia className={classes.media} image={item.data.url} title={item.data.title} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {clippedTitle}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.data.author}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <ItemModal item={item} /> */}
            <Button size="small" color="primary" target="_blank" href={photoUrl}>
              See it on Reddit
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
