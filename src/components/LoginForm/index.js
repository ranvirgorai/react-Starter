import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Button from "components/Button";
import Loading from "components/Loading";
import FormView from "components/FormView";
import Input from "components/Input";
import ErrorMessage from "components/ErrorMessage";

export default class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.props.onFormEnter(name, value);
  }

  onSubmit(e) {
    this.props.onSubmit();
    e.preventDefault();
  }
  render() {
    const { canSubmit } = this.props;
    return (
      <FormView className="form-horizontal">
        <div className="form-group">
          <div className="col-sm-12">
            <Input
              type="name"
              name="name"
              placeholder="Name"
              onChange={this.onChange}
            ></Input>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <Input
              type="mobile"
              name="mobile"
              placeholder="Mobile"
              onChange={this.onChange}
            ></Input>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <Input
              type="address"
              name="address"
              placeholder="Address"
              onChange={this.onChange}
            ></Input>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            {this.props.error && (
              <ErrorMessage error={this.props.error.message} />
            )}
            <Button
              type="main"
              className="pull-right"
              onClick={this.onSubmit}
              disabled={!canSubmit || this.props.loading}
            >
              {this.props.loading ? (
                <Loading>SENDING... </Loading>
              ) : (
                <span>SEND OTP</span>
              )}
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <span className="pull-right">
              <Link to="/verify">Already have an OTP</Link>
            </span>
          </div>
        </div>
      </FormView>
    );
  }
}
