import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";

import App from "App";
import storeTemplate from "store/storeTemplate";

const stores = {
  storeTemplate,
};

ReactDOM.render(
  <Provider {...stores}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
