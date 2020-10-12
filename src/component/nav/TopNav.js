import React from "react";

export default function TopNav() {
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
    </div>
  );
}
