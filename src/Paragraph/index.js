import "./style.css";

const Paragraph = ({ text, value }) => (
    <p className="paragraph">{text}<strong>{value}</strong></p>
);

export default Paragraph;