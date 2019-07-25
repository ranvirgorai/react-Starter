import React from 'react';
import { render } from '@testing-library/react';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it("should match the snapshot", () => {
    const renderedComponent = render(<Wrapper/>);
    expect(renderedComponent).toMatchSnapshot();
  });
  it('should render an <div> tag', () => {
    const { container } = render(<Wrapper />);
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<Wrapper />);
    expect(container.querySelector('div').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<Wrapper id={id} />);
    expect(container.querySelector('div').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<Wrapper attribute="test" />);
    expect(container.querySelector('div[attribute="test"]')).toBeNull();
  });
});
