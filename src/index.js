import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Root from "Root";





const render = Component => {
  return ReactDOM.render(
    <Root>
      <Component />
    </Root>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    render(NextApp);
  });
}
