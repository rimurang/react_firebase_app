function Child({ onSendMessage }) {
  const msg = "안녕~";

  return (
    <button onClick={() => onSendMessage(msg)}>부모에게 메세지 보내기</button>
  );
}

export default Child;
