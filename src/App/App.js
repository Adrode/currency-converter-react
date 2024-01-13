import Container from "./Container";
import Clock from "./Clock";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Footer from "./Footer";
import Form from "./Form";

function App() {

  return (
    <Container>
      <Clock />
      <Header
        title="Currency converter"
      />
      <Paragraph
        text="Convert USD to the amount in your selected currency."
      />
      <Form />
      <Footer
        text="Page by Adrian W."
      />
    </Container>
  );
}

export default App;