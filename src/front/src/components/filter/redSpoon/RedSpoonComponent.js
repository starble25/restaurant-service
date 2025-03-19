

export default function RedSpoonComponent( {totalStore, spoonCountList, handleSpoonClick, resetFilters}) {

    
    const handlePrepare = () => {
        alert('서비스 준비중입니다.');
    };


    return (
        <>
            <ul>
                <li onClick={resetFilters}>전국 전체 ({totalStore})</li>
                {
                    spoonCountList.map( (item, index) => {
                        return (
                            <li key={index} onClick={() => handleSpoonClick(item.spoon)}>
                                스푼 {item.spoon}개 ({item.count})
                            </li>
                        )
                    })
                }
                <li onClick={handlePrepare}>새로 오픈한 맛집</li>
                <li onClick={handlePrepare}>평가를 기다리는 곳</li>
                <li onClick={handlePrepare}>주목할 만한 새 맛집</li>
                <li onClick={handlePrepare}>구독자 추천 맛집</li>
            </ul>
        </>
    )
}