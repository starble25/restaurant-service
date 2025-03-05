import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./SubmainPage.css";




export default function SubmainPage() {


    return (

        <>
            <h1 style={ {height : '150px'}}>submainPage</h1>

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
                                    <li>스푼 1개 (2,093)</li>
                                    <li>새로 오픈한 맛집 (774)</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>스푼 3개 (40)</li>
                                    <li>스푼 0개 (2,600)</li>
                                    <li>평가를 기다리는 곳 (12,169)</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>스푼 2개 (452)</li>
                                    <li>주목할 만한 새 맛집 (36)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </TabPanel>
            </Tabs>
        </>
    );
}