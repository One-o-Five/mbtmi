import { useRef, useEffect } from "react";
import styled from "styled-components";

const AccountYear = ({ options, value, onChange }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    let timeout;

    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const items = Array.from(el.children);
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;

        let closest = null;
        let closestDist = Infinity;
        items.forEach((item) => {
          const itemRect = item.getBoundingClientRect();
          const itemCenter = itemRect.top + itemRect.height / 2;
          const dist = Math.abs(center - itemCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closest = item.innerText;
          }
        });

        if (closest && closest !== value) {
          onChange(closest);
        }
      }, 100);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [value, onChange]);

  return (
    <Wrapper>
      <ul ref={listRef}>
        {options.map((opt) => (
          <li key={opt} className={opt === value ? "active" : ""}>
            {opt}
          </li>
        ))}
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
