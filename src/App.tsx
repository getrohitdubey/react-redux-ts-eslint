import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./redux/store";
import Feeds from "./pages/feeds";
const App = (): JSX.Element => {
  return (
    <Provider store={Store}>
      <Feeds />
    </Provider>
  );
};

export default App;
