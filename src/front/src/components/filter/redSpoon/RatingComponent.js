

export default function RatingComponent( {totalStore, rateCountList, handleRatingClick, resetFilters} ) {


    const handlePrepare = () => {
        alert('서비스 준비중입니다.');
    };


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
                <li onClick={handlePrepare}>주목할 만한 새 맛집</li>
                <li onClick={handlePrepare}>구독자 추천 맛집</li>
            </ul>
        </>
    )
}