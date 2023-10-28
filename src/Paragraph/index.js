import "./style.css";

const Paragraph = ({ text, value }) => (
    <p className="main__paragraph">{text}{value}</p>
);

export default Paragraph;