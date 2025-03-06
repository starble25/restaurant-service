import React from "react"


export default function StoreList({ storeList, menuList }) {



    return (

        <div>
            {/* <image></image> */}

            {
                menuList.map((item, index) => {
                    return <div key={index}>{item.menuType}</div>
                })
            }

            <p>{storeList.storeName}</p>
            <p>{storeList.address}</p>
            <p>{storeList.spoon}</p>
            <p>{storeList.rateTotal}</p>
            <p>{storeList.rateCount}</p>
        </div>
    )
}