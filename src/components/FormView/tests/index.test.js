import React from 'react';
import { render } from "@testing-library/react";
import FormView from '../index';



describe('<FormView />', () => {
  const {container}=render(<FormView/>)
  it('Should render a from element', () => {
    expect(container.querySelector('form')).toBeInTheDocument;
  });

  it("should match the snapshot", () => {
    const renderedComponent = render(<FormView/>);
    expect(renderedComponent).toMatchSnapshot();
  });
});
