import "./style.css";

const Paragraph = ({ text, value }) => (
    <p className="paragraph">{text}{value}</p>
);

export default Paragraph;