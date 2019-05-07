import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    width: '150px',
    position: 'static',
    paddingTop: '10px',
    zIndex: 3
  },
  menu: {
    background: '#f48341',
    height: '100vh'
  },
});

class SideMenu extends Component {

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
         <div className={classes.menu}>
          SideMenu
        </div>
      </div>
    )
  }

};

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideMenu);