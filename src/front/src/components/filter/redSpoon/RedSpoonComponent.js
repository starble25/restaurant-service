

export default function RedSpoonComponent( {totalStore, spoonNumList, fetchStoreData}) {

    return (
        <>
            <ul>
                <li>전국 전체 ({totalStore})</li>
                {spoonNumList.map((item) => (
                    <li key={item.spoon} onClick={() => fetchStoreData(item.spoon)}>
                        스푼 {item.spoon}개 <span>({item.count})</span>
                    </li>
                ))}
                <li>새로 오픈한 맛집 (준비중)</li>
                <li>평가를 기다리는 곳 (준비중)</li>
                <li>주목할 만한 새 맛집 (준비중)</li>
                <li>구독자들의 추천 맛집 (준비중)</li>
            </ul>
        </>
    )
}