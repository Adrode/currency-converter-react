import { useState } from 'react';
import { currencies } from "./currencies";
import Header from "./Header";
import Paragraph from "./Paragraph";
import GridContainer from './GridContainer';
import Footer from "./Footer";
import Form from "./Form";

function App() {
  const [result, setResult] = useState(0);

  const countResult = (currency, inputValue) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult(inputValue * rate);
  };

  return (
    <>
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
    </>
  );
}

export default App;
