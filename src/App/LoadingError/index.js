import { StyledLoadingError, StyledURL } from "./styled";

const LoadingError = () => {
    return (
        <StyledLoadingError>
            Something went wrong with fetching data from
            <StyledURL href=""> currencyapi.com</StyledURL>.<br />
            Try to reload or try again later.
        </StyledLoadingError>
    );
};

export default LoadingError;