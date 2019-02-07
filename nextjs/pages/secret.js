import Header from '../components/Header';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PleaseSignIn from '../components/PleaseSignIn';

const styles = theme => ({
  root: {
    display: 'flex',
  },
})

const SecretPage = props => (
  <div >
    <PleaseSignIn>
        <Header />
        <div className={props.classes.root}>
            this is a secret page :)

            the user is ???
        </div>
    </PleaseSignIn>
  </div>
);


export default withStyles(styles)(SecretPage);