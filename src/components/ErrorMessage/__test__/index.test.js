/* eslint-disable no-unused-expressions */
import React from "react";
import { render } from "@testing-library/react";
import ErrorMessage from "../index";

describe("Component: ErrorMessage", () => {
  it("should match the snapshot", () => {
    const renderedComponent = render(<ErrorMessage/>);
    expect(renderedComponent).toMatchSnapshot();
  });
  describe("On default render", () => {
    const { container } = render(<ErrorMessage />);
    test("Should render a message node", () => {
      expect(container.querySelector("p")).toBeInTheDocument;
    });

    test("Should render with correct class name", () => {
      expect(container.querySelector(".alert")).toBeInTheDocument;
      expect(container.querySelector(".alert-danger")).toBeInTheDocument;
    });
  });

  test("Should render with correct Message", () => {
    const message = "Internal Server Error !";
    const { getByText } = render(<ErrorMessage error={message} />);
    expect(getByText(message)).toBeInTheDocument;
  });
});
