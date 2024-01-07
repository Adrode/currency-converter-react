import { useState, useEffect } from "react";

const Fetch = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("/https://api.currencyapi.com/v3/latest?apikey=cur_live_l6j0fBqqMwtFBjnvWA9uk2Tg0I8v8lrO8q3FBHEi")
            .then(response => response.json())
            .then(currencies => console.log(currencies));
    }, []);
};

export default Fetch;