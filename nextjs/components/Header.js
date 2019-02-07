import React from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import Router from 'next/router';
import NProgerss from 'nprogress';


Router.onRouteChangeStart = () => {
  NProgerss.start();
}

Router.onRouteChangeComplete = () => {
  NProgerss.done();
}

Router.onRouteChangeError = () => {
  NProgerss.done();
}

const styles = theme => ({
    appBar: {
      position: 'relative',
    },
    toolbarTitle: {
      flex: 1,
      cursor: 'pointer',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  });


const Header = (props) => (
    <AppBar position="static" color="default" >
    <Toolbar>
      <Link href="/">
        <Typography variant="h6" color="inherit" noWrap className={props.classes.toolbarTitle}>
          Enhance The Docs
        </Typography>
      </Link>
      <Link href="/">
        <Button>Dashboard</Button>
      </Link>
      <Link href="/pricing">
        <Button>Pricing</Button>
      </Link>
      <Link href="/about">
        <Button>About</Button>
      </Link>
      <Link href="/signup">
      <Button color="primary" variant="outlined">
        Login
      </Button>
      </Link>
    </Toolbar>
    </AppBar>
  );
  
  export default withStyles(styles)(Header);
