import { useCurrentDate } from "./useCurrentDate";
import { StyledDate } from "./styled";

const Clock = () => {
    const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };

    const date = useCurrentDate();
    
    return (
        <StyledDate>
            {date.toLocaleDateString(undefined, dateOptions)}
        </StyledDate>
    )
};

export default Clock; 