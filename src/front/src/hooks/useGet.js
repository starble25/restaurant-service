import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useGet(url, initialSpoonCount) {

    const [storeList, setStoreList] = useState([]);
    const [storeDetailList, setStoreDetailList] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const [spoonNumList, setSpoonNumList] = useState([]);
    const [totalStore, setTotalStore] = useState(0);
    const [loading, setLoading] = useState(true);

    //url파라미터별로 데이터 동적변환
    const fetchStoreData = (spoonCount) => {

        setLoading(true);
        axios
            .get(url, { params: { spoon: spoonCount } })
            .then((Response) => {
                setStoreList(Response.data.storeList);
                setStoreDetailList(Response.data.storeDetailList);
                setMenuList(Response.data.menuList);
                setSpoonNumList(Response.data.storeFilterList);
                setTotalStore(Response.data.totalStore);
            })
            .catch((error) => {
                console.log("error남", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // 초기상태 스푼 3개로 세팅
    useEffect(() => {
        fetchStoreData(initialSpoonCount);
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