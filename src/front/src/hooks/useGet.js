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

    const [ currentPage, setCurrentPage ] = useState(0);
    const [ totalPages, setTotalPages ] = useState(0);


    const { search } = useLocation();
    const urlPath = "/main/store";

    useEffect(() => {

        const params = new URLSearchParams(search);

        const spoon = params.get("spoon") || initialSpoonCount;
        const rateValue = params.get("rateValue") || initialRateValue;
        const locationParam = params.get("location") || initialLocation;
        const foodType = params.get("foodType") || initialFoodType;

        // 기존 page 값 또는 1로 설정
        const page = params.get("page") ? parseInt(params.get("page"), 10) : 1;
        const pageSize = 6;

        // 필터 값이 변경되었는지 확인
        const isFilterChanged = spoon !== initialSpoonCount || rateValue !== initialRateValue || locationParam !== initialLocation || foodType !== initialFoodType;

        // 필터가 변경되면 page 파라미터를 제거하고 데이터를 불러옴
        const paramsWithoutPage = new URLSearchParams(search);
        if (isFilterChanged) {
            paramsWithoutPage.delete("page"); // page 파라미터 삭제
        }

        // setCurrentPage(page);

        fetchStoreData(spoon, rateValue, locationParam, foodType, page, pageSize);

        window.scrollTo(0,0);
    }, [ search ]);


    //url파라미터별로 데이터 동적변환
    const fetchStoreData = (spoonCount = null, rateValue = null, location = null, foodType = null, page = 1, pageSize = 5) => {

        setLoading(true); //loader동작

        const params = {
            spoon: spoonCount,
            rateValue: rateValue,
            location: location,
            foodType: foodType,
            page: page,
            pageSize: pageSize
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

                setCurrentPage(Response.data.currentPage);
                setTotalPages(Response.data.totalPages > 0 ? Response.data.totalPages : 1);

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
        currentPage,
        totalPages,
        fetchStoreData
    };
}