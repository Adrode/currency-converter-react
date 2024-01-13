import styled from "styled-components";

export const StyledLoadingError = styled.div`
    text-align: center;
    padding: 10px;
    color: ${({ theme }) => theme.color.crimson};
`;

export const StyledURL = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.crimson};
    transition: color 0.5s;
    
    &:hover {
        filter: brightness(150%);
    };
`;