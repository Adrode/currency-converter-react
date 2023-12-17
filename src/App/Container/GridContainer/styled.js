import styled from "styled-components";
import { theme } from "../../App";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
`;

export const Element = styled.p`
    text-align: center;
    line-height: 1.5;
    border: 1px solid white;
    padding: 10px 0px;
    margin: 10px;
    background-color: ${(theme) => theme.primaryColor};
`;