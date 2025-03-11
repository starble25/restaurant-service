import LocationComponent from "./LocationComponent";
import "../../../pages/submain/SubmainPage.css"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LocationTab({ totalStore, locationData, fetchStoreData }) {

    const [ tabSwitch, setTabSwitch ] = useState(null);
    const navigate = useNavigate();


    //대분류 클릭시 소분류 변경
    const handleTabClick = (tabName) => {
        setTabSwitch(tabName);
    }

    //지역 필터 소분류 기능
    const handleLocationClick = (location) => {
        
        const queryParams = new URLSearchParams();

        if(location !== null) {
            queryParams.set('location', location);
        } else {
            queryParams.delete('location');
        }

        fetchStoreData(null, null, location, null);

        navigate(`/main/store?${queryParams.toString()}`);
    }

    //필터 초기화 기능
    const resetFilters = () => {
        fetchStoreData(null, null, null, null);
        navigate("/main/store");
    };



    const tabContent = () => {
        if (tabSwitch) {
            return <LocationComponent locationData={locationData[ tabSwitch ]} handleLocationClick={handleLocationClick} resetFilters={resetFilters} />
        }
    }

    return (

        <div className="tab-container">

            <div className="tab-menu">
                {Object.keys(locationData).map((item) => (
                    <button onClick={() => handleTabClick(item)}>
                        {item} <span>›</span>
                    </button>
                ))}
            </div>

            <div className="tab-content">
                {tabContent()}
            </div>
        </div>
    )
}