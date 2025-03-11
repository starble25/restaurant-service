import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';


export default function useGet(initialSpoonCount, initialRateValue, initialLocation, initialFoodType) {

    const [ storeList, setStoreList ] = useState([]);
    const [ storeDetailList, setStoreDetailList ] = useState([]);
    const [ menuList, setMenuList ] = useState([]);
    const [ spoonCountList, setSpoonCountList ] = useState([]);
    const [ rateCountList, setRateCountList ] = useState([]);
    const [ menuCountList, setMenuCountList ] = useState([]);
    const [ totalStore, setTotalStore ] = useState(0);
    const [ loading, setLoading ] = useState(true);

    const { search } = useLocation();
    const urlPath = "/main/store";

    useEffect(() => {

        const params = new URLSearchParams(search);

        const spoon = params.get("spoon") || initialSpoonCount;
        const rateValue = params.get("rateValue") || initialRateValue;
        const locationParam = params.get("location") || initialLocation;
        const foodType = params.get("foodType") || initialFoodType;

        fetchStoreData(spoon, rateValue, locationParam, foodType);
    }, [ search ]);


    //url파라미터별로 데이터 동적변환
    const fetchStoreData = (spoonCount = null, rateValue = null, location = null, foodType = null) => {

        setLoading(true); //loader동작

        const params = {
            spoon: spoonCount,
            rateValue: rateValue,
            location: location,
            foodType: foodType
        };

        axios
            .get(urlPath, { params })
            .then((Response) => {
                setStoreList(Response.data.storeList);
                setStoreDetailList(Response.data.storeDetailList);
                setMenuList(Response.data.menuList);
                setSpoonCountList(Response.data.storeFilterList.spoonList);
                setRateCountList(Response.data.storeFilterList.rateCountList);
                setMenuCountList(Response.data.storeFilterList.menuFilterList);
                setTotalStore(Response.data.totalStore);

                console.log(Response.data);

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
        menuCountList,
        totalStore,
        loading,
        fetchStoreData
    };
}