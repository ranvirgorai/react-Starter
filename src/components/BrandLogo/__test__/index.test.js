/* eslint-disable no-unused-expressions */
import React from "react";
import { render } from "@testing-library/react";
import BrandLogo from "../index";

describe("Component Brand Logo", () => {
  it("should match the snapshot", () => {
    const renderedComponent = render(<BrandLogo />);
    expect(renderedComponent).toMatchSnapshot();
  });
  test("Should render a image", () => {
    const { container } = render(<BrandLogo />);
    expect(container.querySelector("img")).toBeInTheDocument;
  });
});
