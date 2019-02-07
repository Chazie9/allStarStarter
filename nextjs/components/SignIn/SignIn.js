import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from '../Header';
import Link from 'next/link';
import { CURRENT_USER_QUERY } from '../providers/User';
import Error from '../ErrorMessage';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const SIGNIN_MUTATION = gql`
mutation SIGNIN_MUTATION($email: String!, $password: String!) {
  signin(email: $email, password: $password) {
    id
    email
    name
  }
}
`;

class SignIn extends Component {
  state = {
    name: '',
    password: '',
    email: '',
};

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { classes } = this.props;

    return (

        <main className={classes.main}>
          <CssBaseline />
            <Mutation 
              mutation={SIGNIN_MUTATION} 
              variables={this.state}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
            {(signin, { error, loading }) => (
              <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Error error={error} />
                <form 
                  className={classes.form}
                  method="post"
                  
                // old way
                //   onSubmit={async e => {
                //     e.preventDefault();
                //     await signin();
                //     this.setState({ email: '', password: '' });
                //   }}

                  onSubmit={async e => {
                    e.preventDefault();
                    const res = await signin();
                    this.setState({ email: '', password: '' });
                    console.log(res);
                    Router.push({
                        pathname: '/secret',
                        //query: { id: res.data.createPart.id },
                      });
                  }}
                >
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input type="email" placeholder="email" id="email" name="email" autoFocus  value={this.state.email} onChange={this.saveToState}/>
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" type="password" id="password" value={this.state.password} onChange={this.saveToState}/>
                  </FormControl>
                
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign in
                  </Button>
                  
                </form>
              </Paper>
            )}
          </Mutation>
        </main>
    );
  }
}


export default withStyles(styles)(SignIn);