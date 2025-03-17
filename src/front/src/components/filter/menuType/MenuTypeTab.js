import { useState } from "react"
import "../../../pages/submain/SubmainPage.css"

import { useLocation, useNavigate } from 'react-router-dom';
import RestaurantComponent from "./RestaurantComponent";


export default function MenuTypeTab({ menuCountList, totalStore, fetchStoreData }) {

    //switch조건 상태관리
    const [ tabSwitch, setTabSwitch ] = useState("");

    const navigate = useNavigate();
    const location = useLocation();


    const handleTabClick = (tabName) => {
        setTabSwitch(tabName);
    }

    const handleResClick = (foodType) => {

        const queryParams = new URLSearchParams(location.search);

        queryParams.delete('location');
        queryParams.delete('spoon');
        queryParams.delete('rateValue');
        queryParams.delete('page');

        // queryParams.delete('');
        if (foodType !== null) {
            queryParams.set("foodType", foodType);
        } else {
            queryParams.delete("foodType");
        }

        fetchStoreData(null, null, null, foodType);
        queryParams.set('page', 1);

        navigate(`/main/store?${queryParams.toString()}`);
    }



    //필터 초기화 기능
    const resetFilters = () => {
        fetchStoreData(null, null, null, null, 1);
        navigate("/main/store");
    }


    const tabContent = () => {
        switch (tabSwitch) {
            case "restaurant":
                return (
                    <RestaurantComponent totalStore={totalStore} menuCountList={menuCountList} resetFilters={resetFilters} handleResClick={handleResClick} />
                );
        };
    }

    return (

        <div className="tab-container">

            <div className="tab-menu">
                <button onClick={() => handleTabClick("restaurant")}>음식전체 <span>›</span></button> <br />
            </div>

            <div className="tab-content">
                {tabContent()}
            </div>
        </div>

    )

}