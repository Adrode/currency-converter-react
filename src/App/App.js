import { useState, useEffect } from 'react';
import { currencies } from "./currencies";
import Container from "../Container";
import Header from "../Header";
import Paragraph from "../Paragraph";
import GridContainer from '../GridContainer';
import Footer from "../Footer";
import Form from "../Form";

function App() {
  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const [result, setResult] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleDateString(undefined, dateOptions));

  const countResult = (currency, inputValue) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult(inputValue * rate);
  };

  useEffect(() => {
    const updateDateInterval = setInterval(() => {
      setDate(date => date = new Date().toLocaleDateString(undefined, dateOptions));
    }, 1000);

    return () => {
      clearInterval(updateDateInterval);
    };
  });

  return (
    <Container>
      <Header
        date={date}
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
  );
}

export default App;
