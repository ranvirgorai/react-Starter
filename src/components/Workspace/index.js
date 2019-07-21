import React from 'react';

export default class Workspace extends React.Component {

  render() {
    return (
      <div style={{ minHeight: '660px' }}>
        { React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
