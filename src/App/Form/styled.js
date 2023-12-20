import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 40px auto;
    width: 100%;
`;

export const Fieldset = styled.fieldset`
    padding: 20px;
    background-color: ${({ theme }) => theme.main};
`;

export const Legend = styled.legend`
    border: 2px solid #eee;
    border-radius: 15px 0px;
    background-color: ${({ theme }) => theme.main};
    padding: 7px 15px;
    text-transform: uppercase;
`;

export const Paragraph = styled.p`
    text-align: center;
`;

export const LabelText = styled.span`
    display: inline-block;
    width: 200px;
    padding-bottom: 10px;
`;

export const Field = styled.select`
    max-width: 300px;
    width: 100%;
    padding: 7px;
`;

export const Button = styled.button`
    text-transform: uppercase;
    margin-top: 20px;
    border: 2px solid #eee;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    color: #eee;
    background-color: ${({ theme }) => theme.main};
    transition: 0.5s;

    &:hover {
        background-color: hsl(0, 0%, 25%);
        transform: scale(1.05);
    }

    &:active {
        background-color: hsl(0, 0%, 15%);
    }
`;