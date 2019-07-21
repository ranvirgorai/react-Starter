import React from 'react';


export default function ErrorMessage(props) {
  if (!props.error) {
    return null;
  }
  return (
    <p className="alert alert-danger">{props.error}</p>
  );
}
