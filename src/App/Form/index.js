import { useState } from 'react';
import { useRates } from "../useRates";
import { StyledForm, Fieldset, Legend, Paragraph, LabelText, Field, Button } from "./styled";

const Form = () => {
    const ratesData = useRates();

    const [currency, setCurrency] = useState();
    const [currencyText, setCurrencyText] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(0);

    const countResult = (currency, inputValue) => {
        const rate = ratesData.data[currency].value;

        setResult(inputValue * rate);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        countResult(currency, inputValue);
        setCurrencyText(currency);
    };

    const onSelectChange = ({ target }) => setCurrency(target.value);
    const onInputChange = ({ target }) => setInputValue(target.value);

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Paragraph
                hidden={!result}
            >
                Exchange rate based on data from {ratesData.status === "success" && new Date(ratesData.meta.last_updated_at).toLocaleDateString(undefined, { day: "numeric", month: "numeric", year: "numeric"})} by currencyapi.com.
            </Paragraph>
            <Fieldset>
                <Paragraph>
                    <label>
                        <LabelText>Choose currency:</LabelText>
                        <Field
                            value={currency}
                            onChange={onSelectChange}
                        >
                            {ratesData.status === "success" && Object.keys(ratesData.data).map(element => (
                                <option
                                    key={element}
                                    value={element}
                                >
                                    {element} - {(ratesData.data[element].value).toFixed(2)}
                                </option>
                            ))}
                        </Field>
                    </label>
                </Paragraph>
                <Paragraph>
                    <label>
                        <LabelText>Enter USD amount:</LabelText>
                        <Field
                            as="input"
                            type="number"
                            required={true}
                            min="1"
                            step="1"
                            value={inputValue}
                            onChange={onInputChange}
                        />
                    </label>
                </Paragraph>
            </Fieldset>
            <Button
                type="submit"
            >
                Convert
            </Button>
            <Paragraph
                hidden={!result}
            >
                Amount in <strong>{currencyText}</strong>: {result.toFixed(2)}
            </Paragraph>
        </StyledForm>
    )
};

export default Form;