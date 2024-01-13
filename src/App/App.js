import Container from "./Container";
import Clock from "./Clock";
import Loading from "./Loading";
import LoadingError from "./LoadingError";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Footer from "./Footer";
import Form from "./Form";
import { useRates } from "./useRates";

function App() {
  const { status } = useRates();
  console.log(status);

  return (
    <Container>
      <Clock />
      <Header
        title="Currency converter"
      />
      <Paragraph
        text="Convert choosen currencies to USD."
      />
      {status === "loading"
        ?
        <Loading /> : <Form />}



      <Paragraph
      // hidden={result}
      // text="RESULT: "
      // value={result}
      />
      <Footer
        text="Page by Adrian W."
      />
    </Container>
  );
}

export default App;