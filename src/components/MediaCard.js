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
// import { v1 as uuid } from 'uuid';
import ItemModal from './ItemModal';

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    height: 525,
    margin: '10px 10px 10px 10px',
  },
  media: {
    height: 340,
    width: 340,
  },
});

export default function MediaCard({ item }) {
  const photo = item.data;
  const classes = useStyles();
  const photoUrl = `https://www.reddit.com/${photo.permalink}`;
  const selfText = photo.selftext;
  // TODO: Refactor
  // This song and dance ensures we're getting a photo (not a video)
  // or a crosspost
  const hasphoto =
    photo.url.indexOf('.jpg') !== -1 ||
    (photo.url.indexOf('.gif') !== -1 && photo.url.indexOf('.gifv') === -1) ||
    photo.url.indexOf('.png') !== -1;
  const clippedTitle = photo.title.length > 50 ? `${photo.title.substring(0, 42)}...` : photo.title;

  return (
    <div>
      {selfText.length < 2 && hasphoto && (
        <Card className={classes.root}>
          <CardActionArea target="_blank" href={photoUrl}>
            <CardMedia className={classes.media} image={photo.url} title={photo.title} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {clippedTitle}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {photo.author}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ItemModal item={item} />
            <Button size="small" color="primary" target="_blank" href={photoUrl}>
              See it on Reddit
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
