import { useState } from 'react';
import Header from "./Header";
import Paragraph from "./Paragraph";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  const [currency, setCurrency] = useState("EUR");
  const [inputValue, setInputValue] = useState("");
  //const [count, setCount] = useState("");

  const countResult = (currency, inputValue) => {
    const EUR = 4.46;
    const USD = 4.15;
    let result;

    if (currency === "EUR") {
      result = EUR * inputValue;
      console.log(result.toFixed(2));
    }

    else if (currency === "USD") {
      result = USD * inputValue;
      console.log(result.toFixed(2));
    }
  };

  return (
    <>
      <Header
        title="Currency converter"
      />
      <Paragraph
        text="Convert euros and dollars to Polish zlotys at the exchange rate on 04/11/2023."
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
      //value={value}
      />
      <Footer
        text="Page by Adrian W."
      />
    </>
  );
}

export default App;
