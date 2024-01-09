import { useState } from 'react';
import Container from "./Container";
import Clock from "./Clock";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Footer from "./Footer";
import Form from "./Form";
import { useRates } from "./Fetch";

function App() {
  const [result, setResult] = useState(0);
  const ratesData = useRates();

  const countResult = (currency, inputValue) => {
    const rate = ratesData.data[currency].value;

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
    </Container>
  );
}

export default App;