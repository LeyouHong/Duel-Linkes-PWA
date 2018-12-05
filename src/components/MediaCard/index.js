import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import testIMG from '../../assets/logo.66x66.png'

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

var onClickHandle = () => {
  console.log('click')
}

function MediaCard(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root} onClick={onClickHandle}>
      <Grid container direction="row" justify="space-between" alignItems="center">
          <img alt="complex" src={testIMG} />
          <Typography gutterBottom>Leo First Video</Typography>
      </Grid>
    </Paper>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);