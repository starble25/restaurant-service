import React, { useState } from "react";
import "../../../pages/submain/SubmainPage.css"
import RatingComponent from "./RatingComponent";
import RedSpoonComponent from "./RedSpoonComponent";

import { useLocation, useNavigate } from 'react-router-dom';


export default function RedSpoonTab({ totalStore, spoonCountList, rateCountList, fetchStoreData }) {

    //switch조건 상태관리
    const [ tabSwitch, setTabSwitch ] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    //대분류 클릭시 소분류 변경
    const handleTabClick = (tabName) => {
        setTabSwitch(tabName);
    }

    const handleSpoonClick = (spoonCount) => {

        const queryParams = new URLSearchParams(location.search);

        const currentRate = queryParams.get('rateValue');

        queryParams.delete('foodType');


        if (spoonCount !== null) {
            queryParams.set('spoon', spoonCount);
        }
        if (currentRate !== null) {
            queryParams.set('rateValue', currentRate);
        }
        

        fetchStoreData(spoonCount, currentRate, null, null);

        navigate(`/main/store?${queryParams.toString()}`);
    };

    // 평점 소분류 필터기능
    const handleRatingClick = (rating) => {

        const queryParams = new URLSearchParams(location.search);

        const currentSpoon = queryParams.get('spoon');
        
        queryParams.delete('foodType');

        if (currentSpoon !== null) {
            queryParams.set('spoon', currentSpoon);
        }
        if (rating !== null) {
            queryParams.set('rateValue', rating);
        }

        fetchStoreData(currentSpoon, rating, null, null);

        navigate(`/main/store?${queryParams.toString()}`);
    }

    //필터 초기화 기능
    const resetFilters = () => {
        fetchStoreData(null, null, null, null);
        navigate("/main/store");
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
