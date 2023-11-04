import { useState } from 'react';
import Header from "./Header";
import Paragraph from "./Paragraph";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  const [currency, setCurrency] = useState("EUR");

  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Header
        title="Currency converter"
      />
      <Paragraph
        text="Convert euros and dollars to Polish zlotys at the exchange rate on 29/03/2023."
      />
      <Form
        currency={currency}
        setCurrency={setCurrency}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Paragraph
        text="Amount in PLN: "
        value="N/A"
      />
      <Footer
        text="Page by Adrian W."
      />
    </>
  );
}

export default App;
