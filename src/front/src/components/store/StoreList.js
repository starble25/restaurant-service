import React from "react"
import "./StoreList.css";

export default function StoreList({ storeList, menuList, storeDetailList }) {



    return (

        <div className="store-card">
            {/* 이미지 */}
            {/* <image className="store-image"></image> */}

            {/* 스푼개수 */}
            <div>스푼개수 {storeList.spoon}</div>

            {/* 가게명 & 평점 */}
            <div className="store-header">
                <div>{storeList.storeName}</div>
                <span className="rating">{storeList.rateCount}/{storeList.rateTotal}</span>
            </div>

            <hr />

            {/* 전화 & 주소 */}
            <div className="store-info">
                <div className="info-row">
                    <div className="info-label">전화</div>
                    {
                        storeDetailList
                            .filter(detail => detail.storeId == storeList.id)
                            .map((item, index) => (
                                <div className="info-value" key={index}>{item.tel}</div>
                            ))
                    }
                </div>

                <div className="info-row">
                    <div className="info-label">주소</div>
                    <div className="info-value">{storeList.address}</div>
                </div>
            </div>
            <hr />

            <div className="store-menu">
                {
                    storeDetailList
                        .filter(detail => detail.storeId == storeList.id)
                        .map((item, index) => (
                            <div className="menu-item" key={index}>{item.menuDesc}</div>
                        ))
                }
            </div>

        </div>
    )
}