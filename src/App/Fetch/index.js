import { useState, useEffect } from "react";

const Fetch = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("newCurrencies.json")
            .then(response => response.json())
            .then(currencies => console.log(currencies));
    }, []);
};

export default Fetch;