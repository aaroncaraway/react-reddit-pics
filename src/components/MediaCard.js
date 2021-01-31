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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 97,
    width: 148,
  },
});

export default function MediaCard({ item, key }) {
  const classes = useStyles();
  const photoUrl = `https://www.reddit.com/${item.data.permalink}`;

  return (
    <Card className={classes.root} key={key}>
      <CardActionArea>
        <CardMedia className={classes.media} image={item.data.thumbnail} title={item.data.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.data.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" target="_blank" href={photoUrl}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
