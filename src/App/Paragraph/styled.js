import styled, { css } from "styled-components";

export const StyledParagraph = styled.p`
    text-align: center;
    line-height: 1.5;

    ${({ hidden }) => hidden && css`
        display: none;
    `};
`;