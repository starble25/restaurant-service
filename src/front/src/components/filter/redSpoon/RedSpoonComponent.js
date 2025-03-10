

export default function RedSpoonComponent( {totalStore, spoonCountList, handleSpoonClick, resetFilters}) {


    return (
        <>
            <ul>
                <li onClick={resetFilters}>전국 전체 ({totalStore})</li>
                {
                    spoonCountList.map( (item, index) => {
                        return (
                            <li key={index} onClick={() => handleSpoonClick(item.spoon)}>
                                스푼 {item.spoon}개 <span>({item.count})</span>
                            </li>
                        )
                    })
                }
                <li>새로 오픈한 맛집 (준비중)</li>
                <li>평가를 기다리는 곳 (준비중)</li>
                <li>주목할 만한 새 맛집 (준비중)</li>
                <li>구독자들의 추천 맛집 (준비중)</li>
            </ul>
        </>
    )
}