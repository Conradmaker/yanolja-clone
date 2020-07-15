import React from "react";
import "../css/Home.scss";

export default function Home() {
  return (
    <div className="home">
      <section className="section--catagory">
        <div className="inner">
          <div className="location">서울특별시 강남구</div>
          <ul className="catagory">
            <a href="/" className="item">
              <div className="list-logo logo1">모텔</div>
              <p>모텔</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo2">호텔</div>
              <p>모텔</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo3">프리미엄호텔</div>
              <p>프리미엄호텔</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo4">리조트</div>
              <p>리조트</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo">펜션/풀빌라</div>
              <p>펜션/풀빌라</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo5">글램핑/카라반</div>
              <p>글램핑/카라반</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo6">게스트하우스</div>
              <p>게스트하우스</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo7">항공권</div>
              <p>항공권</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo8">렌터카</div>
              <p>렌터카</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo9">KTX</div>
              <p>KTX</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo10">레저/티켓</div>
              <p>레저/티켓</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo11">아이야놀자</div>
              <p>아이야놀자</p>
            </a>
          </ul>
          <ul className="coupon">
            <a href="/" className="coupon1">
              <div className="coupon-img1">선착순쿠폰</div>
              <p>선착순쿠폰</p>
            </a>
            <a href="/" className="coupon2">
              <div className="coupon-img1">무한쿠폰룸</div>
              <p>무한쿠폰룸</p>
            </a>
            <a href="/" className="coupon3">
              <div className="coupon-img1">썸머VIP</div>
              <p>썸머VIP</p>
            </a>
          </ul>
        </div>
      </section>
    </div>
  );
}
