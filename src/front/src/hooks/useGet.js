import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';


export default function useGet(url, initialSpoonCount, initialRateValue, initialLocation) {

    const [ storeList, setStoreList ] = useState([]);
    const [ storeDetailList, setStoreDetailList ] = useState([]);
    const [ menuList, setMenuList ] = useState([]);
    const [ spoonCountList, setSpoonCountList ] = useState([]);
    const [ rateCountList, setRateCountList ] = useState([]);
    const [ totalStore, setTotalStore ] = useState(0);
    const [ loading, setLoading ] = useState(true);

    const [ currentSpoon, setCurrentSpoon ] = useState(initialSpoonCount);
    const [ currentRate, setCurrentRate ] = useState(initialRateValue);
    const [ currentLocation, setCurrentLocation ] = useState(initialLocation);

    const {search} = useLocation();
    const params = new URLSearchParams(search);

    const spoon = params.get("spoon") !== 'null' ? params.get('spoon') : null;
    const rateValue = params.get("rateValue") !== 'null' ? params.get('rateValue') : null;
    const locationParam = params.get("location");

    const parsedSpoon = (spoon === "null" || spoon === null) ? initialSpoonCount : spoon;
    const parsedRate = (rateValue === "null" || rateValue === null) ? initialRateValue : rateValue;
    const parsedLocation = (locationParam === "null" || locationParam === null) ? initialLocation : locationParam;

    useEffect(() => {
        fetchStoreData(parsedSpoon, parsedRate, parsedLocation);
    }, []);


    //url파라미터별로 데이터 동적변환
    const fetchStoreData = (spoonCount = null, rateValue = null, location = null) => {

        setLoading(true); //loader동작

        const params = {
            spoon: spoonCount !== null ? spoonCount : currentSpoon,
            rateValue: rateValue !== null ? rateValue : currentRate,
            location: location !== null ? location : currentLocation
        };

        axios
            .get(url, { params })
            .then((Response) => {
                setStoreList(Response.data.storeList);
                setStoreDetailList(Response.data.storeDetailList);
                setMenuList(Response.data.menuList);
                setSpoonCountList(Response.data.storeFilterList.spoonList);
                setRateCountList(Response.data.storeFilterList.rateCountList);
                setTotalStore(Response.data.totalStore);

                setCurrentSpoon(spoonCount);
                setCurrentRate(rateValue);
                setCurrentLocation(location);
            })
            .catch((error) => {
                console.log("error남", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };


    return {
        storeList,
        storeDetailList,
        menuList,
        spoonCountList,
        rateCountList,
        totalStore,
        loading,
        fetchStoreData
    };
}