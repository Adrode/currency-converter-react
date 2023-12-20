import { currencies } from '../currencies';
import { StyledContainer, Element } from "./styled";

const GridContainer = () => (
    <StyledContainer>
        {currencies.map(sourceCurrency => (
            <Element
                key={sourceCurrency.id}
            >
                {sourceCurrency.name}{" = "}<strong>{sourceCurrency.rate}</strong>
            </Element>
        ))}
    </StyledContainer>
);

export default GridContainer;