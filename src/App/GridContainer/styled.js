import styled from "styled-components";

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const Element = styled.p`
    text-align: center;
    line-height: 1.5;
    border: 1px solid ${({ theme }) => theme.color.white};
    padding: 10px 0px;
    margin: 10px;
    background-color: ${({theme}) => theme.color.mineShaft};
`;