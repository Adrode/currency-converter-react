import { useState } from 'react';
import { currencies } from "../../currencies";
import { StyledForm, Fieldset, Legend, Paragraph, LabelText, Field, Button } from "./styled";

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
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>
                    Converter
                </Legend>
                <Paragraph>
                    <label>
                        <LabelText>Choose currency:</LabelText>
                        <Field
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
                        </Field>

                    </label>
                </Paragraph>
                <Paragraph>
                    <label>
                        <LabelText>Enter the amount:</LabelText>
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
        </StyledForm>
    )
};

export default Form;