import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

function App() {
  const isLogin = true;
  const userName = "봉미선";
  const fruits = ["사과", "배", "바나나", "망고"];
  const todos = [
    { id: 1, text: "리액트 공부하기", done: true },
    { id: 2, text: "파이어베이스 연결하기", done: false },
    { id: 3, text: "운동하기", done: false },
  ];

  /* S: firebase */
  const [text, setText] = useState(""); // 입력값 state

  //  입력이벤트 처리(controlled component)
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Firestore에 데이터 저장
  const handleSubmit = async () => {
    if (text.trim() === "") return; // 빈값 방지

    try {
      await addDoc(collection(db, "messages"), {
        content: text,
        createAt: new Date(),
      });
      //alert("저장 성공!");
      setText(""); // 입력창 초기화
      await fetchMessages(); // 저장 후 다시 불러오기
    } catch (e) {
      console.error("저장 실패:", e);
    }
  };

  const [messages, setMessages] = useState([]); // Firestore 데이터 저장용 state

  // Firestore에서 데이터 가져오는 함수
  const fetchMessages = async () => {
    try {
      const q = query(collection(db, "messages"), orderBy("createAt", "asc"));
      const querySnapshot = await getDocs(q);
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(dataList);
    } catch (e) {
      console.error("데이터 불러오기 실패 : ", e);
    }
  };

  // useEffect : 컴포넌트가 처음 렌더링될 때 한 번 실행
  useEffect(() => {
    fetchMessages();
  }, []);
  /* E: firebase */

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

      {/* firebase */}
      <h2>* firebase</h2>
      <h3>폼 입력 제어 (Controlled Components)</h3>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="메시지 입력"
      />
      <button onClick={handleSubmit}>저장</button>

      <h3>데이터 불러오기</h3>
      {messages.length === 0 ? (
        <p>데이터가 없습니다.</p>
      ) : (
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>
              {msg.content}{" "}
              <span style={{ color: "#888", fontSize: "12px" }}>
                ({new Date(msg.createAt.seconds * 1000).toLocaleString()})
              </span>
            </li>
          ))}
        </ul>
      )}

      <button onClick={fetchMessages}>데이터 다시 불러오기</button>
    </div>
  );
}

export default App;
