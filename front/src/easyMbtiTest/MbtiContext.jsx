// MbtiContext.js (개선 예시)
import { createContext, useContext, useState } from "react";

const MbtiContext = createContext();

export const MbtiProvider = ({ children }) => {
  const [scores, setScores] = useState({
    I: 0,
    E: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });
  const [answers, setAnswers] = useState(Array(12).fill(null)); // 각 페이지에 기록된 글자(I/E/S/N/T/F/J/P)

  // 개선: 페이지 단위로 "치환" (이전 선택이 있으면 -1, 새 선택 +1)
  const setAnswerAt = (pageIndex, newLetter) => {
    setScores((prevScores) => {
      const next = { ...prevScores };
      const prevLetter = answers[pageIndex];

      if (prevLetter)
        next[prevLetter] = Math.max(0, (next[prevLetter] ?? 0) - 1);
      next[newLetter] = (next[newLetter] ?? 0) + 1;

      return next;
    });

    setAnswers((prev) => {
      const next = [...prev];
      next[pageIndex] = newLetter;
      return next;
    });
  };

  const resetAll = () => {
    setScores({ I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setAnswers(Array(12).fill(null));
  };

  return (
    <MbtiContext.Provider value={{ scores, answers, setAnswerAt, resetAll }}>
      {children}
    </MbtiContext.Provider>
  );
};

export const useMbti = () => useContext(MbtiContext);
