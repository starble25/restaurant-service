

export default function RatingComponent( {totalStore, rateCountList, handleRatingClick, resetFilters} ) {


    return (
        <>
            <ul>
                <li onClick={resetFilters} >전국 전체 ({totalStore})</li>
                {
                    rateCountList.map( (item) => {
                        return (
                            <li onClick={ () => {handleRatingClick(item.rate)}}>평점 {item.rate}점 ({item.rateCount})</li>
                        )
                    })
                }
                <li>주목할 만한 새 맛집 (준비중)</li>
                <li>구독자들의 추천 맛집 (준비중)</li>
            </ul>
        </>
    )
}