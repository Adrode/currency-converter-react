import { useState } from 'react';
import { currencies } from './currencies';
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
      <div className="grid">
        <Paragraph
          text="EUR = "
          value={EUR}
        />
        <Paragraph
          text="USD = "
          value={USD}
        />
      </div>
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
