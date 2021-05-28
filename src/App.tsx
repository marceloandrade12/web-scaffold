import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { createHashHistory, LocationState } from "history";
import { Logger } from "./helpers";

function App() {
  const history = createHashHistory<LocationState>();
  const store = configureStore("/", history);

  Logger.log("test", {});
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
