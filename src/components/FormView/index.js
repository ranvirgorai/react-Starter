import React from 'react';
import styled from 'styled-components';

const ViewPort = styled.div({
  border: '1px solid #d9e3ea',
  borderRadius: '3px',
  padding: '45px 15px 10px',
  background: '#f3f3f3',
});

function FormView(props) {
  return (<ViewPort>
    <form className={props.className}>
      {React.Children.toArray(props.children)}
    </form>
  </ViewPort>);
}

FormView.propTypes = {

};

export default FormView;
