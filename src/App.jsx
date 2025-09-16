function App() {
  const isLogin = true;
  const userName = "봉미선";
  const fruits = ["사과", "배", "바나나", "망고"];
  const todos = [
    { id: 1, text: "리액트 공부하기", done: true },
    { id: 2, text: "파이어베이스 연결하기", done: false },
    { id: 3, text: "운동하기", done: false },
  ];

  return (
    <div>
      <h3>연산자</h3>
      {/* 삼항연산자 */}
      <p>{isLogin ? `${userName}님 환영합니다` : "로그인이 필요합니다"}</p>

      {/* &&연산자 (true만) */}
      {isLogin && <p>로그인 성공!</p>}

      <h3>리스트렌더링</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h3>리스트렌더링 + 조건부 렌더링 응용</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.done ? <del>{todo.text}</del> : todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
