import { currencies } from '../../currencies';
import { Container, Element } from "./styled";

const GridContainer = () => (
    <Container>
        {currencies.map(sourceCurrency => (
            <Element
                key={sourceCurrency.id}
            >
                {sourceCurrency.name}{" = "}<strong>{sourceCurrency.rate}</strong>
            </Element>
        ))}
    </Container>
);

export default GridContainer;