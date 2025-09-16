import Child from "./Child";
import { useState } from "react";

function App() {
  // count 상태 변수와 setCount 상태 변경 함수 생성
  const number = 10;
  const [count, setCount] = useState(number);

  // 이벤트 핸들러 함수 정의
  const increase = () => {
    setCount(count + 1);
  };

  const handleMessage = (msg) => {
    alert("자식의 메세지 : " + msg);
  };

  return (
    <div>
      <h3>useState</h3>
      <p>현재 숫자 : {count}</p>
      {/* 버튼 클릭 시 setCount 실행 -> state 값 변경 */}
      <button onClick={increase}> +1 </button>

      <h3>콜백 전달 (= emit)</h3>
      {/* 부모가 콜백 함수를 props로 전달 */}
      <Child onSendMessage={handleMessage} />
    </div>
  );
}

export default App;
