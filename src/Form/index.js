import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">
                Converter
            </legend>
            <p className="form__paragraph">
                <label>
                    <span className="form__labelText">Choose Euro or Dollars:</span>
                    <select className="form__field">
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </label>
            </p>
            <p className="form__paragraph">
                <label>
                    <span className="form__labelText">Enter the amount:</span>
                    <input className="form__field" type="number" required min="1" step="1" />
                </label>
            </p>
        </fieldset>
        <button className="form__submit">Convert</button>
    </form>
);

export default Form;