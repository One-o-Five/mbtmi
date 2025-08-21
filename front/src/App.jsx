import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/data/hello")
      .then((response) => {
        if (!response.ok) {
          throw new Error("서버 응답 에러");
        }
        return response.json(); // JSON으로 변환
      })
      .then((data) => {
        console.log("서버 응답:", data);
        setMessage(data.message); // 스프링에서 내려준 message 사용
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });
      
  }, []); // 컴포넌트 처음 렌더링될 때 실행

  return (
    <div>
      <h1>Spring Boot 응답:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
