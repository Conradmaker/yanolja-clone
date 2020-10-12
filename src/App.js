import React from "react";
import "./App.scss";
import { Route, Link } from "react-router-dom";
import Home from "./component/Home";
import TopNav from "./component/nav/TopNav";
import BottomMenu from "./component/nav/BottomMenu";

function App() {
  return (
    <div>
      <TopNav />
      <Route path="/" component={Home} exact />
      <BottomMenu />
    </div>
  );
}

export default App;
