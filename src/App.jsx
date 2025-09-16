import Greeting from "./Greeting"; // 컴포넌트 불러오기

import "./App.css";

function App() {
  const name = "나나";
  const isLogin = true;

  return (
    <div>
      <h3>JSX 기본 문법 </h3>
      {/* 중괄호  {} 안에 JS표현식 사용 가능 */}
      <p>Hello, {name}</p>
      <p>{isLogin ? "로그인 성공" : "로그인 필요"}</p>

      <h3>Greeting 컴포넌트 예제 (props)</h3>
      <Greeting name="철수" />
      <Greeting name="영희" />
    </div>
  );
}

export default App;
