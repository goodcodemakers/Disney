import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Upbutton from "./components/Upbutton";
function App() {
  return (
    <>
      {/* header + nav */}
      <Header />
      {/* 디지니 대표 섹션 */}
      <Section title="Disney+" logo="logo-dp.png" bg="bg-dp.jpg" />
      {/* 디지니 */}
      <Section title="Disney" logo="logo-d.png" bg="bg-d.jpg" />
      {/* 마블 */}
      <Section title="marvel" logo="logo-m.png" bg="bg-m.jpg" />
      {/* 스타워즈 */}
      <Section title="Star Wars" logo="logo-s.png" bg="bg-s.jpg" />
      {/* 네셔널지오그래피 */}
      <Section title="National Geographic" logo="logo-ng.png" bg="bg-ng.jpg" />
      {/* 20세기 스튜디오 */}
      <Section title="20th Century Studios" logo="logo-20.png" bg="bg-20.jpg" />
      <Upbutton />
    </>
  );
}

export default App;
