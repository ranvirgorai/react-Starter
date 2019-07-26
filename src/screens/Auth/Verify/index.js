import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import { Link } from "react-router-dom";
import Button from "components/Button";
import Loading from "components/Loading";
import FormView from "components/FormView";
import Input from "components/Input";
import ErrorMessage from "components/ErrorMessage";
import {getUserId, defaultRedirection} from "utils/auth";
import FormWorkspace from "components/Workspace/Form";
import { TITLE } from "./constants";
import { verifyOtp, verifyOtpRest } from "./actions";
import selectLoginSession from "./selectors";
import reducer from "./reducer";
import saga from "./sagas";

class Verify extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      mobileOTP: ""
    };
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  }

  onSubmit() {
    let dataToSubmit = {
      mobileOTP: this.state.mobileOTP,
      userId: getUserId()
    };
    this.props.triggerVerifyOtp(dataToSubmit);
  }

  render() {
    return (
      <Fragment>
        <Helmet
          title={` ${TITLE} - Login`}
          meta={[{ name: "description", content: "" }]}
        />
        {defaultRedirection("verify")}
        <FormWorkspace>
          <FormView className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-12">
                <Input
                  type="number"
                  name="mobileOTP"
                  placeholder="OTP"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                {this.props.status && (
                  <ErrorMessage error={this.props.status.error} />
                )}
                <Button
                  type="main"
                  className="pull-right"
                  onClick={this.onSubmit}
                  disabled={this.props.loginStatus.loading || !this.state.mobileOTP}
                >
                  {this.props.loading ? (
                    <Loading>Verifying... </Loading>
                  ) : (
                    <span>VERIFY</span>
                  )}
                </Button>
              </div>
            </div>

            <span className="pull-right">
              <Link to="/login">Send Again</Link>
            </span>
          </FormView>
        </FormWorkspace>
      </Fragment>
    );
  }
}

Verify.propTypes = {
  onLoginDispatch: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  loginStatus: selectLoginSession(),
  status: selectLoginSession()
});

function mapDispatchToProps(dispatch) {
  return {
    triggerVerifyOtp: data => {
      dispatch(verifyOtp(data));
    },
    triggerVerifyOtpRest: () => {
      dispatch(verifyOtpRest());
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "verify", reducer });
const withSaga = injectSaga({ key: "verify", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Verify);
