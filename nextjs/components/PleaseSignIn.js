import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './providers/User';
import Signin from './SignIn/SignIn';

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div>
            <p>This feature is not ready yet, please come back soon.</p>
            <Signin />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;