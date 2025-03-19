import './MyReview.css';

function MyReview({ myInfo }) {



    return (
        <div className='myReviewContainer'>
            <div className='titleWrapper'>
                <h3>내 리뷰 목록</h3>
            </div>
            <div className='myReviewListWrapper'>
                <ol>
                    <li className='listContainer listTitle'>
                        <div className='listStyle titleStyle'>번호</div>
                        <div className='listStyle titleStyle'>식당 이름</div>
                        <div className='listStyle titleStyle'>제목</div>
                        <div className='listStyle titleStyle'>내용</div>
                        <div className='listStyle titleStyle'>별점</div>
                    </li>
                    <li className='listContainer listContent'>
                        <div className='listStyle contentStyle'>1</div>
                        <div className='listStyle contentStyle'>달식당</div>
                        <div className='listStyle contentStyle'>리뷰남김</div>
                        <div className='listStyle contentStyle'>가끔갑니다</div>
                        <div className='listStyle contentStyle'>5</div>
                    </li>
                    <li className='listContainer listContent'>
                        <div className='listStyle contentStyle'>2</div>
                        <div className='listStyle contentStyle'>달식당</div>
                        <div className='listStyle contentStyle'>리뷰남겨요</div>
                        <div className='listStyle contentStyle'>우동이 맛있어요</div>
                        <div className='listStyle contentStyle'>4</div>
                    </li>
                    <li className='listContainer listContent'>
                        <div className='listStyle contentStyle'>3</div>
                        <div className='listStyle contentStyle'>달식당</div>
                        <div className='listStyle contentStyle'>리뷰작성</div>
                        <div className='listStyle contentStyle'>점심 할인이 좋네요</div>
                        <div className='listStyle contentStyle'>4.5</div>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default MyReview;