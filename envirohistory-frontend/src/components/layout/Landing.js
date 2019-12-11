import React from 'react';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';

const Landing = ({ login }) => {
  const landingDesc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a nunc tempus, condimentum nunc laoreet, consequat urna. Praesent lobortis neque ligula, sit amet euismod felis lacinia vitae.';

  return (
    <div>
      <h1>Welcome to Enviro-History</h1>
      <p>{landingDesc}</p>
      <button onClick={login}>Sign In</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { login }
)(Landing);
