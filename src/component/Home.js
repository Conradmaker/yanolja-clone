import React from "react";
import "../css/Home.scss";

export default function Home() {
  return (
    <div className="home">
      {/* 카테고리 */}
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
              <p>호텔</p>
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
              <div className="list-logo logo5">펜션/풀빌라</div>
              <p>펜션/풀빌라</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo6">글램핑/카라반</div>
              <p>글램핑/카라반</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo7">게스트하우스</div>
              <p>게스트하우스</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo8">항공권</div>
              <p>항공권</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo9">렌터카</div>
              <p>렌터카</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo10">KTX</div>
              <p>KTX</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo11">레저/티켓</div>
              <p>레저/티켓</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo12">아이야놀자</div>
              <p>아이야놀자</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo13">테마파크</div>
              <p>테마파크</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo14">초특가부산</div>
              <p>초특가부산</p>
            </a>
            <a href="/" className="item">
              <div className="list-logo logo15">해외숙소</div>
              <p>해외숙소</p>
            </a>
          </ul>
          <ul className="coupons">
            <a href="/" className="coupon-item">
              <div className="coupon-img img1">선착순쿠폰</div>
              <p>선착순쿠폰</p>
            </a>
            <a href="/" className="coupon-item">
              <div className="coupon-img img2">무한쿠폰룸</div>
              <p>무한쿠폰룸</p>
            </a>
            <a href="/" className="coupon-item">
              <div className="coupon-img img3">썸머VIP</div>
              <p>썸머VIP</p>
            </a>
          </ul>
        </div>
      </section>

      {/* 하단부 */}

      {/* 배너 */}
      <div className="container">
        <section className="inner banner-container">
          <div className="banner"></div>
        </section>

        {/* 회원인기검색어 */}
        <section className="inner fav-list">
          <h1 className="title">회원 인기 검색어</h1>
          <ul className="img-list">
            <a href="/" className="list-img img1">
              #프랜차이즈
              <br /> 프로모션
            </a>
            <a href="/" className="list-img img2">
              #신축/리모델링
            </a>
            <a href="/" className="list-img img3">
              #초특가 호텔
            </a>
            <a href="/" className="list-img img4">
              #파티룸
            </a>
          </ul>
          <ul className="fav-tag">
            <a href="/" className="tag-list">
              #인기숙소
            </a>
            <a href="/" className="tag-list">
              #무료영화
            </a>
            <a href="/" className="tag-list">
              #스파펜션
            </a>
          </ul>
        </section>

        {/* 중앙배너 */}
        <section className="inner middle-banner"></section>

        {/* 호캉스 */}
        <section className="inner hokangs">
          <div className="title-container">
            <h1 className="title">우리도 호캉스 갈까?</h1>
            <a href="/" className="more-info">
              호텔/리조트
            </a>
          </div>
          <ul className="location-list">
            <a href="/" className="location">
              서울
            </a>
            <a href="/" className="location">
              경기인천
            </a>
            <a href="/" className="location">
              강원
            </a>
            <a href="/" className="location">
              부산
            </a>
          </ul>
          <ul className="hokang-list">
            <a href="/" className="hokangs-item">
              <div className="img img1">더 파크호텔 서울</div>{" "}
              <div className="hotel-name">더 파크호텔 서울</div>
              <p>
                63,000<span>원</span>
              </p>{" "}
            </a>
            <a href="/" className="hokangs-item">
              <div className="img img2">호텔 더 디자이너스 여의도</div>{" "}
              <div className="hotel-name">호텔 더 디자이너스 여의도</div>
              <p>
                50,000<span>원</span>
              </p>{" "}
            </a>
            <a href="/" className="hokangs-item">
              <div className="img img3">페어필드 바이 메리어트</div>{" "}
              <div className="hotel-name">페어필드 바이 메리어트</div>
              <p>
                60,000<span>원</span>
              </p>{" "}
            </a>
            <a href="/" className="hokangs-item">
              <div className="img img4">메이플레이스</div>{" "}
              <div className="hotel-name">메이플레이스</div>
              <p>
                64,800<span>원</span>
              </p>{" "}
            </a>
          </ul>
          <a href="/" className="more-theme">
            다른 테마 보기 <p>1 </p> / 2
          </a>
        </section>

        <section className="inner section-event">
          <h1 className="title">기획전</h1>
          <ul className="event-list">
            <a href="/" className="event-item img1">
              <div className="text-positioner">
                <div className="box">MD추천</div>
                <div className="event-title">시원한 물놀이&스파 데이트</div>
                <div className="event-des">
                  쿨하고 프라이빗한 모텔에서 즐기자!
                </div>
              </div>
            </a>
            <a href="/" className="event-item img2">
              <div className="text-positioner">
                <div className="box">할인혜택</div>
                <div className="event-title">풀빌라,수영장 원하는대로!</div>
                <div className="event-des">
                  올 여름 펜션에서 놀자!인기테마모음집<span>♥</span>
                </div>
              </div>
            </a>
            <a href="/" className="event-item img3">
              <div className="text-positioner">
                <div className="box">MD추천</div>
                <div className="event-title">한번쯤 가보고싶은 고급모텔</div>
                <div className="event-des">
                  분위기까지 알체게 챙긴 고퀄리티 모텔!
                </div>
              </div>
            </a>
            <a href="/" className="event-item img4">
              <div className="text-positioner">
                <div className="box">MD추천</div>
                <div className="event-title">퇴실이뭔데? 무한대실 모텔</div>
                <div className="event-des">
                  커플추천! 끝나지않는 달콤한 데이트!
                </div>
              </div>
            </a>
            <a href="/" className="event-item img5">
              <div className="text-positioner">
                <div className="box">할인혜택</div>
                <div className="event-title">지금 할인중인 모텔</div>
                <div className="event-des">
                  선착순 최대25%할인+차이 중복할인까지!
                </div>
              </div>
            </a>
            <a href="/" className="event-item img6">
              <div className="text-positioner">
                <div className="box">MD추천</div>
                <div className="event-title">
                  에어컨 빵빵! 실내데이트<span>♥</span>{" "}
                </div>
                <div className="event-des">
                  올 여름 더위대피소 모텔 데이트 고!
                </div>
              </div>
            </a>
          </ul>
          <div className="more-info">더 다양한 기획전 보기 ></div>
        </section>

        {/* 공지사항 */}
        <section className="inner section--noti">
          <span>공지사항</span>
          <p>
            <a href="/">야놀자 포인트 적립 정책 변경 안내</a>
          </p>
        </section>

        <footer>
          <div className="inner">
            <p>
              이 사이트는 연습용 클론코딩 사이트이며 저작권은 야놀자에 있습니다.
            </p>
            <p>
              2020 . 07 . 16 author: <span>유원근</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
