import { useState } from 'react';
import { currencies } from "../App/currencies";
import "./style.css";

const Form = ({ countResult }) => {
    const [currency, setCurrency] = useState(currencies[0].name);
    const [inputValue, setInputValue] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        countResult(currency, inputValue);
    };

    const onSelectChange = ({ target }) => setCurrency(target.value);
    const onInputChange = ({ target }) => setInputValue(target.value);

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    Converter
                </legend>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText">Choose currency:</span>
                        <select
                            className="form__field"
                            value={currency}
                            onChange={onSelectChange}
                        >
                            {currencies.map(sourceCurrency => (
                                <option
                                    key={sourceCurrency.id}
                                    value={sourceCurrency.name}
                                >
                                    {sourceCurrency.fullname}
                                </option>
                            ))}
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
                type="submit"
            >
                Convert
            </button>
        </form>
    )
};

export default Form;