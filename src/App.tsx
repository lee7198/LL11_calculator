import Calculator from "./pages/Calculator";
import { CalculatorBody } from "./styles/components/CalculatorBody";
import GlobalStyle, { RootContainerStyle } from "./styles/globalStyle";

function App() {
  return (
    <RootContainerStyle>
      <GlobalStyle />
      <CalculatorBody>
        <Calculator />
      </CalculatorBody>
    </RootContainerStyle>
  );
}

export default App;
