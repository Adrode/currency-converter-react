import { useState } from 'react';
import Header from "./Header";
import Paragraph from "./Paragraph";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  const [currency, setCurrency] = useState("EUR");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("N/A");

  const currencies = [
    {
      type: "EUR",
      value: 4.37,
    },
    {
      type: "USD",
      value: 4.03,
    },
    {
      type: "GBP",
      value: 5.00,
    },
  ];

  const countResult2 = () => {
    
  };

  const EUR = 4.46;
  const USD = 4.15;

  const countResult = (currency, inputValue) => {
    switch (currency) {
      case "EUR":
        setResult(result => result = EUR * inputValue);
        break;
      case "USD":
        setResult(result => result = USD * inputValue);
        break;
      default:
        alert("Something went wrong");
        break;
    };
  };

  return (
    <>
      <Header
        title="Currency converter"
      />
      <Paragraph
        text="Convert euros and dollars to Polish zlotys at the exchange rate on 17/11/2023 by NBP."
      />
      <Paragraph
        text="EUR = "
        value={currencies[0].value}
      />
      <Paragraph
        text="USD = "
        value={currencies[1].value}
      />
      <Paragraph
        text="GBP = "
        value={currencies[2].value}
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
