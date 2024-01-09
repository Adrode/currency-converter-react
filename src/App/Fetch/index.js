import { useState, useEffect } from "react";

export const useRates = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    const fetchRatesData = async () => {
        try {
            const response = await fetch("/currency-converter-react/newCurrencies.json");

            if(!response.ok) {
                throw new Error(response.statusText);
            }

            const { meta, data } = await response.json();

            setRatesData({
                status: "success",
                meta,
                data,
            });
        }
        catch (error) {
            setRatesData({
                status: "error",
            });
        }
    };

    useEffect(() => {
        setTimeout(fetchRatesData, 1000);
    }, [])

    return ratesData;
};