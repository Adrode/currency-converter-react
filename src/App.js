import Header from "./Header";
import Paragraph from "./Paragraph";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header
        title="Currency converter"
      />
      <main className="main">
        <Paragraph
          text="Convert euros and dollars to Polish zlotys at the exchange rate on 29/03/2023."
        />
        <form className="form">
          <fieldset className="form__fieldset">
            <legend className="form__legend">
              Converter
            </legend>
            <p className="form__paragraph">
              <label>
                <span className="form__labelText">Choose Euro or Dollars:</span>
                <select className="form__field currency">
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </select>
              </label>
            </p>
            <p className="form__paragraph">
              <label>
                <span className="form__labelText">Enter the amount:</span>
                <input className="form__field amount" type="number" required min="1" step="1" />
              </label>
            </p>
          </fieldset>
          <button className="form__submit">Convert</button>
        </form>
        <Paragraph
          text="Amount in PLN: "
          value="N/A"
        />
      </main>
      <Footer
        text="Page by Adrian W."
      />
    </>
  );
}

export default App;
