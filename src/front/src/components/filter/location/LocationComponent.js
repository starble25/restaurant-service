

export default function LocationComponent({ locationData, totalStore, handleLocationClick, resetFilters }) {


    return (
        <>
            <li onClick={resetFilters}>전국 전체 ({totalStore})</li>
            {
                locationData.map((item, index) => {
                    return (
                        <li key={index} onClick={() => handleLocationClick(item)}> {item}
                            <span>({item.count})</span>
                        </li>
                    )
                })
            }
        </>
    )
}