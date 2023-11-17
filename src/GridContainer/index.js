import './style.css';
import { currencies } from '../currencies';

const GridContainer = () => (
    <div className="grid">
        {currencies.map(currency => (
            <p
                className="grid__element"
                key={currency.id}
            >
                {currency.name}{" = "}<strong>{currency.rate}</strong></p>
        ))}
    </div>
);

export default GridContainer;