import "./style.css";

const Paragraph = ({ text, value }) => {
    if (typeof value === "number") {
        return (
            <p className="grid__paragraph">{text}<strong>{value.toFixed(2)}</strong></p>
        );
    }

    return <p className="grid__paragraph">{text}</p>;
};

export default Paragraph;