import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";
let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});
it("has a text area and button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("The text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new comment"
      }
    });
    wrapped.update();
  });
  it("has a text area that user can type", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted then test area get emptied", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
