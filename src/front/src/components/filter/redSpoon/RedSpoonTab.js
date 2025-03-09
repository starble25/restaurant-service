import React, { useState } from "react";
import "../../../pages/submain/SubmainPage.css"
import RatingComponent from "./RatingComponent";
import RedSpoonComponent from "./RedSpoonComponent";


export default function RedSpoonTab({ totalStore, spoonNumList, fetchStoreData }) {

    //switch조건 상태관리
    const [tabSwitch, setTabSwitch] = useState("redSpoon");
    const [spoonCount, setSpoonCount] = useState(null); //spoon개수 상태
    const [rateValue, setRateValue] = useState(null); //평점상태 (1~5)


    //대분류 클릭시 소분류 변경
    const handleTabClick = (tabName) => {
        setTabSwitch(tabName);
    }

    //스푼 소분류 필터기능
    const handleSpoonClick = (spoonCount) => {
        setSpoonCount(spoonCount);
        fetchStoreData(spoonCount, rateValue);
    };

    //평점 소분류 필터기능
    const handleRatingClick = (rating) => {
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
                    <RedSpoonComponent totalStore={totalStore} spoonNumList={spoonNumList} handleSpoonClick={handleSpoonClick} resetFilters={resetFilters} />
                );
            case "rating":
                return (
                    <RatingComponent totalStore={totalStore} handleRatingClick={handleRatingClick} resetFilters={resetFilters}/>
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
