import React from "react";
import "./App.scss";
import { Route, Link } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <div>
      <header className="section section--nav-top">
        <div className="inner">
          <nav className="top-nav">
            <a href="/" className="logo">
              메인로고
            </a>
            <a href="/" className="search-top">
              네비검색
            </a>
          </nav>
        </div>
      </header>
      <Route path="/" component={Home} exact />
      <footer className="section section--nav-bottom">
        <nav className="bottom-nav">
          <div className="inner">
            <ul className="items">
              <li className="item">
                <a href="/" className="bottom-menu img1">
                  메뉴
                </a>
                <p>홈</p>
              </li>
              <li className="item">
                <a href="/" className="bottom-menu img2">
                  메뉴
                </a>
                <p>지역</p>
              </li>
              <li className="item">
                <a href="/" className="bottom-menu img3">
                  메뉴
                </a>
                <p>내주변</p>
              </li>
              <li className="item">
                <a href="/" className="bottom-menu img4">
                  메뉴
                </a>
                <p>레저/티켓</p>
              </li>
              <li className="item">
                <a href="/" className="bottom-menu img5">
                  메뉴
                </a>
                <p>MY 야놀자</p>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default App;
