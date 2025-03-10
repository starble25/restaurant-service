import React, { useState } from "react";
import "../../../pages/submain/SubmainPage.css"
import RatingComponent from "./RatingComponent";
import RedSpoonComponent from "./RedSpoonComponent";

import { useNavigate } from 'react-router-dom';

export default function RedSpoonTab({ totalStore, spoonCountList, rateCountList, fetchStoreData }) {

    //switch조건 상태관리
    const [ tabSwitch, setTabSwitch ] = useState("redSpoon");
    const [ spoonCount, setSpoonCount ] = useState(null); //spoon개수 상태
    const [ rateValue, setRateValue ] = useState(null); //평점상태 (1~5)

    const navigate = useNavigate();


    //대분류 클릭시 소분류 변경
    const handleTabClick = (tabName) => {
        setTabSwitch(tabName);
    }

    //스푼 소분류 필터기능
    const handleSpoonClick = (spoonCount) => {
        const queryParams = new URLSearchParams();
        
        if (spoonCount !== null) {
            queryParams.set('spoon', spoonCount);
        }
        if (rateValue !== null) {
            queryParams.set('rateValue', rateValue);
        }
        
        navigate(`/main/store?${queryParams.toString()}`);
        
        setSpoonCount(spoonCount);
        fetchStoreData(spoonCount, rateValue);
    };

    //평점 소분류 필터기능
    const handleRatingClick = (rating) => {
        const queryParams = new URLSearchParams();
        
        if (spoonCount !== null) {
            queryParams.set('spoon', spoonCount);
        }
        if (rateValue !== null) {
            queryParams.set('rateValue', rating);
        }
        
        navigate(`/main/store?${queryParams.toString()}`);

        setRateValue(rating);
        fetchStoreData(spoonCount, rating);
    }

    //필터 초기화 기능
    const resetFilters = () => {
        fetchStoreData(null, null);
    };


    //tabSwitch에 따라 출력 컴포넌트 변경
    const tabContent = () => {
        switch (tabSwitch) {
            case "redSpoon":
                return (
                    <RedSpoonComponent totalStore={totalStore} spoonCountList={spoonCountList} handleSpoonClick={handleSpoonClick} resetFilters={resetFilters} />
                );
            case "rating":
                return (
                    <RatingComponent totalStore={totalStore} rateCountList={rateCountList} handleRatingClick={handleRatingClick} resetFilters={resetFilters} />
                );
        };
    }

    return (
        <div className="tab-container">

            <div className="tab-menu">
                <button onClick={() => handleTabClick("redSpoon")}>레드 스푼 맛집 <span>›</span></button> <br />
                <button onClick={() => handleTabClick("rating")}>평점 <span>›</span></button>
            </div>

            <div className="tab-content">
                {tabContent()}
            </div>
        </div>

    );
}
