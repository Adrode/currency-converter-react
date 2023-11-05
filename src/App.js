import { useState } from 'react';
import Header from "./Header";
import Paragraph from "./Paragraph";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  const [currency, setCurrency] = useState("EUR");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("N/A");

  const EUR = 4.46;
  const USD = 4.15;

  const countResult = (currency, inputValue) => {
    if (currency === "EUR") setResult(result => result = EUR * inputValue);
    else if (currency === "USD") setResult(result => result = USD * inputValue);
  };

  return (
    <>
      <Header
        title="Currency converter"
      />
      <Paragraph
        text="Convert euros and dollars to Polish zlotys at the exchange rate on 04/11/2023."
      />
      <Paragraph
        text="EUR = "
        value={EUR}
      />
      <Paragraph
        text="USD = "
        value={USD}
      />
      <Form
        currency={currency}
        setCurrency={setCurrency}
        inputValue={inputValue}
        setInputValue={setInputValue}
        countResult={countResult}
      />
      <Paragraph
        text="Amount in PLN: "
        value={result}
      />
      <Footer
        text="Page by Adrian W."
      />
    </>
  );
}

export default App;
