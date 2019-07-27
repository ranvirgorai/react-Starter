/*
 *
 * Login
 *
 */

import React, { Component } from 'react';
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
import FormWorkspace from 'components/Workspace/Form';
import { TITLE } from './constants';
import { getHomeFeed  } from './actions';
import selectHomeFeed from './selectors';
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
      <div>
        <Helmet
          title={` ${TITLE} - Login`}
          meta={[{ name: 'description', content: '' }]}
        /> 
        
        <FormWorkspace>
       <h1>Home</h1>
        </FormWorkspace>
      </div>
    );
  }
}

Login.propTypes = {
  onLoginDispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  session: selectHomeFeed(),
  status: selectHomeFeed(),
});

function mapDispatchToProps(dispatch) {
  return {
    triggerGetHomeFeed: data => {
      dispatch(getHomeFeed(data));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });


export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);



// export default 

