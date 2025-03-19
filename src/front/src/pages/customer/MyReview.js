import './MyReview.css';
import { DataTable, TitleRow, TitleCol, ContentRow, ContentCol } from '../company/DataTable';
import usePost from '../../hooks/usePost';

function MyReview({ myInfo }) {
    const review = usePost('/api/review/find-review', myInfo);

    return (
        <div className='myReviewContainer'>
            <div className='titleWrapper'>
                <h3>내 리뷰 목록</h3>
            </div>
            <div className='myReviewListWrapper'>
                <DataTable>
                    <TitleRow>
                        <TitleCol>번호</TitleCol>
                        <TitleCol>식당 이름</TitleCol>
                        <TitleCol>제목</TitleCol>
                        <TitleCol>내용</TitleCol>
                        <TitleCol>별점</TitleCol>
                    </TitleRow>
                    {review && review.map((data, index) => {
                        return (
                            <ContentRow key={data.id}>
                                <ContentCol>{index + 1}</ContentCol>
                                <ContentCol>달식당</ContentCol>
                                <ContentCol>{data.title}</ContentCol>
                                <ContentCol>{data.content}</ContentCol>
                                <ContentCol>{data.rate}</ContentCol>
                            </ContentRow>
                        )
                    })}
                </DataTable>
            </div>
        </div>
    );
}

export default MyReview;