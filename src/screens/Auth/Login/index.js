/*
 *
 * Login
 *
 */

import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  setLoggedIn,
  setLoggedInUser,
  setLoggedInUserLevel,
} from 'utils/auth';
import LoginForm from 'components/LoginForm';
import FormWorkspace from 'components/Workspace/Form';
import { TITLE } from './constants';
import { makeLogin, makeLoginRest  } from './actions';
import selectLoginSession from './selectors';
import reducer from './reducer';
import saga from './sagas';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
    this.dispatchToStore = this.dispatchToStore.bind(this);
    this.state = {
      data: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    // eslint-disable-line
    const session = nextProps.session && nextProps.session.data;
    console.log('session', nextProps.session);
    if (session) {
      setLoggedIn(session.token);
      setLoggedInUser(session);
      setLoggedInUserLevel(session.level);
      // if ([-1, 0, 1, 2].indexOf(userLevel) !== -1) {
      //   return authRedirect(userLevel, firstTime);
      // }
    }
    // if (nextProps.status && nextProps.status.error) {
    //   setTimeout(() => {
    //     this.setState({ isLogging: false });
    //   }, 200);
    // }
  }
  componentWillMount() {
    // const userLevel = getLoggedInUserLevel();
    // const firstTime = isUserFirstTime();
    // if (userLevel) {
    //   return authRedirect(userLevel, firstTime);
    // }
  }
  componentWillUnmount() {
    //this.props.resetComponentData();
  }

  onSubmit() {
    console.log("i am called");
    this.setState({ isLogging: true });
    this.props.triggerLogin(this.state.data);
  }

  canSubmit() {
    const { mobile, name, address } = this.state.data;
    return !!mobile && !!name && !!address;
  }

  dispatchToStore(name, value) {
    const data = this.state.data;
    data[name] = value;
    this.setState(data);
  }
  
  render() {
    
    return (
      <Fragment>
        <Helmet
          title={` ${TITLE} - Login`}
          meta={[{ name: 'description', content: '' }]}
        /> 
        
        <FormWorkspace>
          <LoginForm
            canSubmit={this.canSubmit()}
            onSubmit={this.onSubmit}
            onFormEnter={this.dispatchToStore}
            isLogging={this.state.isLogging}
            status={this.props.status}
          />
        </FormWorkspace>
        </Fragment>
    );
  }
}

Login.propTypes = {
  onLoginDispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  session: selectLoginSession(),
  status: selectLoginSession(),
});

function mapDispatchToProps(dispatch) {
  console.log("object")
  return {
    triggerLogin: data => {
      dispatch(makeLogin(data));
    },
    triggerLoginRest: () => {
      dispatch(makeLoginRest());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });


export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);



// export default 

