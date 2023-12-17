import { useState, useEffect } from 'react';
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

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const updateDateInterval = setInterval(() => {
            setDate(date => date = new Date());
        }, 1000);

        return () => {
            clearInterval(updateDateInterval);
        };
    });

    return (
        <StyledDate>
            {date.toLocaleDateString(undefined, dateOptions)}
        </StyledDate>
    )
};

export default Clock; 