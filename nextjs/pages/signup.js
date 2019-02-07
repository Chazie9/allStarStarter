import SignUp from '../components/SignUp/SignUp';
import SignIn from '../components/SignIn/SignIn';
import Header from '../components/Header';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
})

const SignUpPage = props => (
  <div >
    <Header />
    <div className={props.classes.root}>
      <SignUp />
      {/*<SignIn /> */}
      
    </div>
  </div>
);

export default withStyles(styles)(SignUpPage);