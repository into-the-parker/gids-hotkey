import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft: '165px',
    marginTop: '10px',
    position: 'absolute',
    background: '#0188ad',
    width: '88%',
    height: '100vh',
    justifyContent: 'center',
    zIndex: 2
  },
  contentContainer: {
    maxWidth: '100%',
    margin: 'auto'
  },
  paper: {
    background: 'blue',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    height: '500px'
  }
});

class MainContent extends Component {

  render() {
  const { classes } = this.props

    return (
      <div className={classes.root}>
        <Grid container className={classes.contentContainer} spacing={24}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Insert Infographics here</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Insert Infographics here</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Insert Infographics here</Paper>
        </Grid>
        </Grid>
      </div>
    )
  }
};

MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainContent);