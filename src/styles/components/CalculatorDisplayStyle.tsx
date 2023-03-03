import styled from "styled-components";
import { theme } from "../theme";

export function CalculatorDisplayStyle(props: { children: React.ReactNode }) {
  return (
    <DisplayStyle>
      <DisplayContentStyle>{props.children}</DisplayContentStyle>
    </DisplayStyle>
  );
}

const DisplayStyle = styled.div`
  width: 100%;
  padding-bottom: 1rem;
`;

const DisplayContentStyle = styled.div`
  height: 3rem;
  background: #222;
  color: #eee;
  border-radius: 0.5rem;
  padding: 1rem;
`;
