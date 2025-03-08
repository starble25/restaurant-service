import React, { useState } from "react";
import "../../../pages/submain/SubmainPage.css"
import RatingComponent from "./RatingComponent";
import RedSpoonComponent from "./RedSpoonComponent";


export default function RedSpoonTab({ totalStore, spoonNumList, fetchStoreData }) {

    //switch조건 상태관리리
    const [tabSwitch, setTabSwitch] = useState("redSpoon");
    // const [activeBtn, setActiveBtn] = useState(null);

    const handleTabClick = (tabName) => {
        setTabSwitch(tabName);
        // setActiveBtn(index);
        
    }


    //tabSwitch에 따라 출력 컴포넌트 변경
    const tabContent = () => {
        switch (tabSwitch) {
            case "redSpoon":
                return (
                    <RedSpoonComponent totalStore={totalStore} spoonNumList={spoonNumList} fetchStoreData={fetchStoreData} />
                );
            case "rating":
                return (
                    <RatingComponent totalStore={totalStore} />
                );
        };
    }

    return (
        <div className="tab-container">

            <div className="tab-menu">
                <button onClick={() => handleTabClick("redSpoon", "index")}>레드 스푼 맛집 <span>›</span></button> <br />
                <button onClick={() => handleTabClick("rating", "index")}>평점 <span>›</span></button>
            </div>

            <div className="tab-content">{tabContent()}</div>
        </div>

    );
}
