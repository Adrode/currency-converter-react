import { useState, useEffect } from "react";

export const useRates = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    const fetchRatesData = async () => {
        try {
            const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_l6j0fBqqMwtFBjnvWA9uk2Tg0I8v8lrO8q3FBHEi");

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
        setTimeout(fetchRatesData, 2000);
    }, [])

    return ratesData;
};