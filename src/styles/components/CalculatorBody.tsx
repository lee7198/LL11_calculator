import styled from "styled-components";
import { theme } from "../theme";

export function CalculatorBody(props: { children: React.ReactNode }) {
  return <BodyStyle>{props.children}</BodyStyle>;
}

const BodyStyle = styled.div`
  width: 350px;
  min-height: 400px;
  background-color: ${theme.primary};
  margin: 0 auto;
  padding: 3rem 1rem;
  border-radius: 0.5rem;
`;
