import Nav from '../components/Nav';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PleaseSignIn from '../components/PleaseSignIn';

const styles = theme => ({
  root: {
    display: 'flex',
  },
})

const AccountPage = props => (
  <div >
    <PleaseSignIn>
        <Nav />
        <div className={props.classes.root}>
            this is the account page :)

            the user is ???

            account 
        </div>
    </PleaseSignIn>
  </div>
);


export default withStyles(styles)(AccountPage);