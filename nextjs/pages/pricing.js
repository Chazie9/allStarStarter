import Nav from '../components/Nav';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
})

const PricingPage = props => (
  <div >
    <Nav />
    <div className={props.classes.root}>
        pricing pricing pricing
    </div>
  </div>
);


export default withStyles(styles)(PricingPage);