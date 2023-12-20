import { Title } from "./styled";

const Header = ({ title, date }) => (
    <header>
        <div>
            {date}
        </div>
        <Title>
            {title}
        </Title>
    </header>
);

export default Header;