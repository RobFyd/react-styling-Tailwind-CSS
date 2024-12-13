import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

const StyledItem = styled.li`
  background: salmon;
  padding: 30px 50px;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
`;

const StyledEmoji = styled.span`
  display: block;
  margin-bottom: 42px;
  font-size: 32px;
  transition: transform 0.8s;
  ${({ $zoomed }) => $zoomed && "transform: scale(3)"}
`;

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li>
      <span>{emoji}</span>
      <button
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Zoom out" : "Zoom in"}
      </button>
    </li>
  );
}
