


export default function RestaurantComponent({ totalStore, menuCountList, resetFilters, handleResClick }) {



    return (
        <>
            <li onClick={resetFilters}>전국 전체 ({totalStore})</li>
            {
                menuCountList.map((item, index) => {
                    return (
                        <li key={index} onClick={() => handleResClick(item.menuType)}>{item.menuType} ({item.menuCount})</li>
                    )
                })
            }
        </>
    )
}