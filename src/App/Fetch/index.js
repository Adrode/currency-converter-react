import { useState, useEffect } from "react";

const Fetch = () => {
    const [ratesData, setRatesData] = useState({});

    useEffect(() => {
        fetch("public/newCurrencies.json")
            .then(response => response.json())
            .then(currencies => console.log(currencies));
        /*fetch("/https://api.currencyapi.com/v3/latest?apikey=cur_live_l6j0fBqqMwtFBjnvWA9uk2Tg0I8v8lrO8q3FBHEi")
            .then(response => response.json())
            .then(currencies => {
                setRatesData((ratesData) => ratesData = { ...currencies })
            });*/
    }, []);
};

export default Fetch;