import { StyledParagraph } from "./styled";

const Paragraph = ({ text, value }) => {
    if (typeof value === "number") {
        return (
            <StyledParagraph>{text}<strong>{value.toFixed(2)}{" PLN"}</strong></StyledParagraph>
        );
    }
    return <StyledParagraph>{text}</StyledParagraph>;
};

export default Paragraph;