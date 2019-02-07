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
import User from './providers/User';
import Signout from './Signout';

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


const Nav = (props) => (
    <AppBar position="static" color="default" >
        <User>
            {({ data: { me } }) => (
                <Toolbar>  
                    <Link href="/">
                    
                        <Typography variant="h6" color="inherit" noWrap className={props.classes.toolbarTitle}>
                            Enhance The Docs
                        </Typography>
                       
                    </Link>
                    <Link href="/">
                        <Button>Home</Button>
                    </Link>
                    <Link href="/pricing">
                        <Button>Pricing</Button>
                    </Link>
                    <Link href="/about">
                        <Button>About</Button>
                    </Link>

                    {me && <Link href="/account">
                        <Button>Account</Button>
                    </Link>
                    
                    }
                    {!me && <Link href="/signup">
                        <Button color="primary" variant="outlined">
                            Login
                        </Button>
                    </Link>}

                    {me && <Signout />}
                    
                </Toolbar>
            )}
        </User>
    </AppBar>
);
  
export default withStyles(styles)(Nav);