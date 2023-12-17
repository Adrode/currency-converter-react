import "./style.css";

const Paragraph = ({ text, value }) => {
    if (typeof value === "number") {
        return (
            <p className="paragraph">{text}<strong>{value.toFixed(2)}{" PLN"}</strong></p>
        );
    }

    return <p className="paragraph">{text}</p>;
};

export default Paragraph;