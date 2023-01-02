import React from "react";
import style from "./Header.module.css";
export default function Header() {
  return (
    <header>
      {/* 모듈 전용 css를 쓸때엔 임포턴트를할떄 변수선언을하고 
    클레스네임에서 {중갈호}를 쓰고 이름. 적용할 스타일객체명을 써준다. 변수로 쓰일때에는자바스크립트 방식이기때문에 하이픈 - 뺴기를 쓰지 못하기떄문에 캐멀방식으로 쓴다. ex text R ed처럼 */}
      <h1 className={style.textPrimary}>Walt Disney</h1>
      <nav>
        <a href="#Disney+">타이틀</a>|<a href="#Disney"> DISNEY</a>|
        <a href="#marvel"> 마블</a>|<a href="#Star Wars"> 스타워즈</a>|
        <a href="#National Geographic"> 네셔널지오그래피</a>|
        <a href="#20th Century Studios"> 20세기 스튜디오</a>
      </nav>
    </header>
  );
}
