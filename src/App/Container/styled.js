import styled from "styled-components";

export const StyledContainer = styled.main`
    padding: 50px;
    background-color: ${({ theme }) => theme.color.tundora};
    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 20px;
`;