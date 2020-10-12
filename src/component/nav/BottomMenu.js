import React from "react";

export default function BottomMenu() {
  return (
    <div>
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
