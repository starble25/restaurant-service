

export default function RatingComponent( {totalStore, handleRatingClick, resetFilters} ) {


    return (
        <>
            <ul>
                <li onClick={resetFilters} >전국 전체 ({totalStore})</li>
                <li onClick={()=> handleRatingClick(5)} >평점 5점</li>
                <li onClick={()=> handleRatingClick(4)} >평점 4점</li>
                <li onClick={()=> handleRatingClick(3)} >평점 3점</li>
                <li onClick={()=> handleRatingClick(2)} >평점 2점</li>
                <li onClick={()=> handleRatingClick(1)} >평점 1점</li>
                <li onClick={()=> handleRatingClick(0)} >평점 0점</li>
                <li>주목할 만한 새 맛집 (준비중)</li>
                <li>구독자들의 추천 맛집 (준비중)</li>
            </ul>
        </>
    )
}