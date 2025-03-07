import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./SubmainPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import StoreList from "../../components/store/StoreList";


export default function SubmainPage() {


    const [ storeList, setStoreList ] = useState([]);
    const [ storeDetailList, setStoreDetailList ] = useState([]);
    const [ menuList, setMenuList ] = useState([]);

    const fetchStoreData = (spoonCount) => {
        axios
            .get("/main/store", { params: { spoon: spoonCount } })
            .then((Response) => {
                setStoreList(Response.data.storeList);
                setStoreDetailList(Response.data.storeDetailList);
                setMenuList(Response.data.menuList);
            })
            .catch((error) => {
                console.log("error남", error);
            });
    };


    // 초기상태 스푼 3개로 세팅
    useEffect(() => {
        fetchStoreData(3);
    }, []);


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

                    {/* 필터 컨테이너 */}
                    <TabPanel>
                        <div className="tab-container">

                            {/* 좌측 대분류 필터 */}
                            <div className="tab-menu">
                                <button>
                                    전국
                                    <span>›</span>
                                </button>
                            </div>

                            {/* 우측 소분류 필터 */}
                            <div className="tab-content">
                                <div>
                                    <ul>
                                        <li>전국 전체 (18,164)</li>
                                        <li onClick={() => { fetchStoreData(1) }}>스푼 1개
                                            <span>

                                            </span>
                                        </li>
                                        <li>새로 오픈한 맛집 (준비중)</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li onClick={() => { fetchStoreData(3) }}>스푼 3개
                                            <span>

                                            </span>
                                        </li>
                                        <li onClick={() => { fetchStoreData(0) }}>스푼 0개
                                            <span>

                                            </span>
                                        </li>
                                        <li>평가를 기다리는 곳 (준비중)</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li onClick={() => { fetchStoreData(2) }}>스푼 2개
                                            <span>

                                            </span>
                                        </li>
                                        <li>주목할 만한 새 맛집 (준비중)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>


                <div className="store-container">
                    {
                        storeList.map((item, index) => {
                            return <StoreList key={index} storeList={item} menuList={menuList} storeDetailList={storeDetailList} />
                        })
                    }
                </div>
            </div>
        </>
    );
}