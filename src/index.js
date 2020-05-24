import React from "react";
import { render } from "react-dom";
import myStore from './redux/store/store.js';
import { Provider } from "react-redux";
import App from './app.js';

const Main = () => {
  return (
    <Provider store={myStore}>
      <App />
    </Provider>
  );
};

render(<Main />, document.getElementById("root"));
