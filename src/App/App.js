import { useState } from 'react';
import { currencies } from "./currencies";
import { ThemeProvider } from 'styled-components';
import Container from "./Container";
import Clock from "./Container/Clock";
import Header from "./Container/Header";
import Paragraph from "./Container/Paragraph";
import GridContainer from './Container/GridContainer';
import Footer from "./Container/Footer";
import Form from "./Container/Form";

const theme = {
  main: "#222",
};

function App() {
  const [result, setResult] = useState(0);

  const countResult = (currency, inputValue) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult(inputValue * rate);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Clock />
        <Header
          title="Currency converter"
        />
        <Paragraph
          text="Convert choosen currencies to Polish zlotys 
        at the exchange rate on 17/11/2023 by NBP."
        />
        <GridContainer />
        <Form
          countResult={countResult}
        />
        <Paragraph
          text="RESULT: "
          value={result}
        />
        <Footer
          text="Page by Adrian W."
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;