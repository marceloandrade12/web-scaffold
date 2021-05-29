import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { createHashHistory, LocationState } from "history";
import { Logger } from "./helpers";
import { Home } from "./screens";
import "antd/dist/antd.css";

function App() {
  const history = createHashHistory<LocationState>();
  const store = configureStore("/", history);

  Logger.log("test", {});
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
