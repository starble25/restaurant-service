import LocationComponent from "./LocationComponent";
import "../../../pages/submain/SubmainPage.css"
import { useState } from "react";


export default function LoactionTab({ totalStore, locationData, fetchStoreData }) {

    const [ tabSwitch, setTabSwitch ] = useState(null);
    const [ currentLocation, setCurrentLoaction ] = useState(null);

    //대분류 클릭시 소분류 변경
    const handleTabClick = (tabName) => {
        setTabSwitch(tabName);
    }

    //지역 필터 소분류 기능
    const handleLocationClick = (location) => {
        setCurrentLoaction(location);
        fetchStoreData(null, null, location);
    }

    //필터 초기화 기능
    const resetFilters = () => {
        fetchStoreData(null, null, null);
    };



    const tabContent = () => {
        if (tabSwitch) {
            return <LocationComponent totalStore={totalStore} locationData={locationData[ tabSwitch ]} handleLocationClick={handleLocationClick} resetFilters={resetFilters} />
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