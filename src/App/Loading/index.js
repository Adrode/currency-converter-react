import { StyledLoading, StyledURL } from "./styled";

const Loading = () => {
    return (
        <StyledLoading>
            Loading data from<br />
            <StyledURL
                href = "https://currencyapi.com/">currnecyapi.com
            </StyledURL>.<br />
            Please, wait.
        </StyledLoading>
    );
};

export default Loading;