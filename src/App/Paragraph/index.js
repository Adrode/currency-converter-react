import { StyledParagraph } from "./styled";

const Paragraph = ({ text, value }) => (
    <StyledParagraph>
        {text}
        {typeof value === "number"
        ? <strong>{value.toFixed(2)}{" PLN"}</strong>
        : null}
    </StyledParagraph>
);

export default Paragraph;