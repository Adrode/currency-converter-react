import { useState } from 'react';
import { currencies } from "./currencies";
import Container from "./Container";
import Clock from "./Clock";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Footer from "./Footer";
import Form from "./Form";
import Fetch from "./Fetch";

function App() {
  const [result, setResult] = useState(0);

  const countResult = (currency, inputValue) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult(inputValue * rate);
  };

  return (

    <Container>
      <Clock />
      <Header
        title="Currency converter"
      />
      <Paragraph
        text="Convert choosen currencies to Polish zlotys 
        at the exchange rate on 17/11/2023 by NBP."
      />
      <Form
        countResult={countResult}
      />
      <Paragraph
        hidden={result}
        text="RESULT: "
        value={result}
      />
      <Footer
        text="Page by Adrian W."
      />
      <Fetch />
    </Container>
  );
}

export default App;