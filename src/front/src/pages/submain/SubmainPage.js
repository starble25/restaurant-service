import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./SubmainPage.css";

import StoreList from "../../components/store/StoreList";
import Spinner from "../../components/reactLoader/reactLoader";
import useGet from "../../hooks/useGet";
import RedSpoonTab from "../../components/filter/redSpoon/RedSpoonTab";

import locationData from "../../constants/LocationData";
import LoactionTab from "../../components/filter/location/LocationTab";


export default function SubmainPage() {


    //subMain페이지 경로
    const urlPath = "/main/store";

    //커스텀 훅
    const {
        storeList,
        storeDetailList,
        menuList,
        spoonCountList,
        rateCountList,
        totalStore,
        loading,
        fetchStoreData
    } = useGet(urlPath, 3, 5, "대구광역시");



    return (
        <>
            <h1 style={{ height: '150px' }}>submainPage</h1>

            <div className="submain-container">
                <Tabs>
                    <TabList>
                        {/* 상단 리스트 */}
                        <Tab>레드스푼</Tab>
                        <Tab>지역</Tab>
                        <Tab>음식종류</Tab>
                        <Tab>특징</Tab>
                    </TabList>


                    {/* 레드스푼 필터 */}
                    <TabPanel>
                        <RedSpoonTab totalStore={totalStore} spoonCountList={spoonCountList} rateCountList={rateCountList} fetchStoreData={fetchStoreData} />
                    </TabPanel>
                    {/* 지역 필터 */}
                    <TabPanel>
                        <LoactionTab totalStore={totalStore} locationData={locationData} fetchStoreData={fetchStoreData} />
                    </TabPanel>
                </Tabs>


                <div className="store-container">
                    {
                        loading ? (
                            <Spinner />
                        ) : (
                            storeList.map((item, index) => {
                                return <StoreList key={index} storeList={item} menuList={menuList} storeDetailList={storeDetailList} />
                            })
                        )}
                </div>
            </div>
        </>
    );
}
