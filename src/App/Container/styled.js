import styled from "styled-components";

export const StyledContainer = styled.main`
    padding: 50px;
    background-color: ${({ theme }) => theme.color.tundora};
    border-radius: 20px;
    box-shadow: 5px 5px 5px ${({ theme }) => theme.color.mineShaft};
`;