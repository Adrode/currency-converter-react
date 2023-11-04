import "./style.css";

const Form = ({ currency, setCurrency, inputValue, setInputValue }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    };

    const onSelectChange = ({ target }) => setCurrency(target.value);

    const onInputChange = ({ target }) => setInputValue(target.value);

    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    Converter
                </legend>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText">Choose Euro or Dollars:</span>
                        <select
                            className="form__field"
                            value={currency}
                            onChange={onSelectChange}
                        >
                            <option>EUR</option>
                            <option>USD</option>
                        </select>
                    </label>
                </p>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText">Enter the amount:</span>
                        <input
                        className="form__field"
                        type="number"
                        required={true}
                        min="1"
                        step="1"
                        value={inputValue}
                        onChange={onInputChange}
                        />
                    </label>
                </p>
            </fieldset>
            <button
                className="form__submit"
                onClick={onFormSubmit}
            >
                Convert
            </button>
        </form>
    )
};

export default Form;