import { useRef, useEffect } from "react";
import styled from "styled-components";

const AccountYear = ({ options, value, onChange }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;

    const onWheel = (e) => {
      e.preventDefault();
      const items = Array.from(el.children).filter((c) => c.tagName === "LI");
      const currentIndex = items.findIndex((item) => item.innerText === value);

      let nextIndex = currentIndex + (e.deltaY > 0 ? 1 : -1);
      nextIndex = Math.max(1, Math.min(items.length - 2, nextIndex)); // 더미 제외

      const nextValue = items[nextIndex].innerText;
      if (nextValue) {
        onChange(nextValue);
        items[nextIndex].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [value, onChange]);
  return (
    <Wrapper>
      <ul ref={listRef}>
        <li style={{ height: "50px" }} /> {/* 더미 위쪽 */}
        {options.map((opt) => (
          <li key={opt} className={opt === value ? "active" : ""}>
            {opt}
          </li>
        ))}
        <li style={{ height: "50px" }} /> {/* 더미 아래쪽 */}
      </ul>
      <div className="highlight" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 150px;
  width: 80px;
  overflow: hidden;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }

  li {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: center;
    color: #999;
    font-size: 18px;
  }

  li.active {
    color: black;
    font-weight: bold;
    font-size: 22px;
  }

  .highlight {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 50px;
    margin-top: -25px;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    pointer-events: none;
  }
`;

export default AccountYear;
