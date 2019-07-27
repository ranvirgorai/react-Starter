import React from 'react';
import { render } from "@testing-library/react";
import FormView from '../index';



describe('<FormView />', () => {
  const {container}=render(<FormView/>)
  it('Should render a from element', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(container.querySelector('form')).toBeInTheDocument;
  });

  it("should match the snapshot", () => {
    const renderedComponent = render(<FormView/>);
    expect(renderedComponent).toMatchSnapshot();
  });
});
