import './style.css';
import { currencies } from '../App/currencies';

const GridContainer = () => (
    <div className="grid">
        {currencies.map(sourceCurrency => (
            <p
                className="grid__element"
                key={sourceCurrency.id}
            >
                {sourceCurrency.name}{" = "}<strong>{sourceCurrency.rate}</strong></p>
        ))}
    </div>
);

export default GridContainer;