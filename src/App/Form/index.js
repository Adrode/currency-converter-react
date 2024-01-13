import { useState } from 'react';
import { useRates } from "../useRates";
import { StyledForm, Fieldset, Paragraph, LabelText, Field, Button, StyledURL } from "./styled";
import Loading from "../Loading";
import LoadingError from "../LoadingError";

const Form = () => {
    const ratesData = useRates();

    const [currency, setCurrency] = useState("EUR");
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
            {ratesData.status === "loading"
                ? (
                    <Loading />
                )
                : (
                    ratesData.status === "error" ? (
                        <LoadingError />
                    ) : (
                        <>
                            <Fieldset>
                                <Paragraph>
                                    <label>
                                        <LabelText>Choose currency:</LabelText>
                                        <Field
                                            value={currency}
                                            onChange={onSelectChange}
                                        >
                                            {Object.keys(ratesData.data).map(element => (
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
                            <Paragraph $resized>
                                Exchange rate based on data from {ratesData.status === "success"
                                    &&
                                    new Date(ratesData.meta.last_updated_at).toLocaleDateString(undefined,
                                        { day: "numeric", month: "numeric", year: "numeric" })} by
                                <StyledURL href="https://currencyapi.com/"> currencyapi.com
                                </StyledURL>.<br />
                            </Paragraph>
                        </>
                    ))}
        </StyledForm>
    )
};

export default Form;