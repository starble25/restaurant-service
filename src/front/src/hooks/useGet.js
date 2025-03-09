import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useGet(url, initialSpoonCount, initialRateValue) {

    const [storeList, setStoreList] = useState([]);
    const [storeDetailList, setStoreDetailList] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const [spoonNumList, setSpoonNumList] = useState([]);
    const [totalStore, setTotalStore] = useState(0);
    const [loading, setLoading] = useState(true);

    const [currentSpoon, setCurrentSpoon] = useState(null);
    const [currentRate, setCurrentRate] = useState(null);

    //url파라미터별로 데이터 동적변환
    const fetchStoreData = (spoonCount = null, rateValue = null) => {

        setLoading(true); //loader동작

        const params = {
            spoon: spoonCount !== null ? spoonCount : currentSpoon,
            rateValue: rateValue !== null ? rateValue : currentRate
        };

        axios
            .get(url, { params })
            .then((Response) => {
                setStoreList(Response.data.storeList);
                setStoreDetailList(Response.data.storeDetailList);
                setMenuList(Response.data.menuList);
                setSpoonNumList(Response.data.storeFilterList);
                setTotalStore(Response.data.totalStore);

                setCurrentSpoon(spoonCount);
                setCurrentRate(rateValue);
            })
            .catch((error) => {
                console.log("error남", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

        // console.log(spoonNumList);

    // 초기상태 스푼 3개로 세팅
    useEffect(() => {
        fetchStoreData(initialSpoonCount, initialRateValue);
    }, []);



    return {
        storeList,
        storeDetailList,
        menuList,
        spoonNumList,
        totalStore,
        loading,
        fetchStoreData
    };
}