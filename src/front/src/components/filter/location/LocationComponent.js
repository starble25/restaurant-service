

export default function LocationComponent({ locationData, handleLocationClick, resetFilters }) {


    return (
        <>
            <li onClick={resetFilters}>전국 전체</li>
            {
                locationData.map((item, index) => {
                    return (
                        <li key={index} onClick={() => handleLocationClick(item)}>{item}</li>
                    )
                })
            }
        </>
    )
}