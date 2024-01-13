import styled from "styled-components";

export const StyledLoading = styled.div`
    text-align: center;
`;

export const StyledURL = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.malachite};
    transition: color 0.5s;
    
    &:hover {
        filter: brightness(150%);
    };
`;