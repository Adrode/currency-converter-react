import { HeaderTitle } from "./styled";

const Header = ({ title, date }) => {
    return (
        <header>
            <div>
                {date}
            </div>
            <HeaderTitle>
                {title}
            </HeaderTitle>
        </header>
    )
};

export default Header;