
import React from 'react';
import styled from 'styled-components';

const InputEl = styled.input({

});

function Input(props) {
  let element;
  if (props.type === 'checkbox') {
    element = <InputEl {...props} />;
  } else {
    element = <InputEl {...props} className="form-control" />;
  }
  return (
    <span>{ element }</span>
  );
}

Input.propTypes = {

};

export default Input;
