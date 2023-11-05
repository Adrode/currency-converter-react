import "./style.css";

const Paragraph = ({ text, value }) => (
    <p className="paragraph">{text}<strong>{value}</strong></p> // tutaj chciałem zmienić value na value.toFixed(2), lecz to również nie działa i jest błąd całej aplikacji
);

export default Paragraph;