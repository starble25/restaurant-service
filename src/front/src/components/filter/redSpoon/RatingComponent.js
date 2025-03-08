

export default function RatingComponent( {totalStore} ) {

    return (
        <>
            <ul>
                <li>전국 전체 ({totalStore})</li>
                <li>평점 5점</li>
                <li>평점 4점</li>
                <li>평점 3점</li>
                <li>평점 2점</li>
                <li>평점 1점</li>
                <li>평점 0점</li>
            </ul>
        </>
    )
}