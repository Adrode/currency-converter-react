import "./style.css";

const Header = ({ title, date }) => {
    return (
        <header className="header">
            <p className="header__date">
                {date}
            </p>
            <h1 className="header__title">
                {title}
            </h1>
        </header>
    )
};

export default Header;