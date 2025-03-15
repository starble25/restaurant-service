import './BookingStore.css';
import { DataTable, TitleRow, TitleCol, ContentRow, ContentCol } from './DataTable';
import CustomBtn from '../../components/common/CustomBtn';

function BookingStore({ bookingData }) {
    // bookingData = {
    //     "id": 1,
    //     "userId": 1,
    //     "storeId": 1,
    //     "totalPeople": 4,
    //     "bookingRegTime": 1741755600000,
    //     "bookingTime": 1742029200000,
    //     "state": "예약완료"
    // }

    function convertButton( text ) {
        if( text === '정상종료' ) {
            return <CustomBtn label={'정상종료'}/>
        }
        if( text === '예약됨' ) {
            return <CustomBtn label={'예약됨'}/>
        }
    }

    return (
        <div className='bookingListContainer'>
            <div className='containerTitle'>
                <h3>예약 목록</h3>
            </div>
            <div className='bookingList'>
                <DataTable>
                    <TitleRow>
                        <TitleCol>구분</TitleCol>
                        <TitleCol>날짜</TitleCol>
                        <TitleCol>예약시간</TitleCol>
                        <TitleCol>예약인원</TitleCol>
                        <TitleCol>상태</TitleCol>
                    </TitleRow>
                    {bookingData && bookingData.map((data, index) => {
                        return (
                            <ContentRow key={data.id}>
                                <ContentCol>{index + 1}</ContentCol>
                                <ContentCol>
                                    {new Date(data.bookingTime).getFullYear()}&ndash;
                                    {new Date(data.bookingTime).getMonth() + 1}&ndash;
                                    {new Date(data.bookingTime).getDate()}
                                </ContentCol>
                                <ContentCol>
                                    {new Date(data.bookingTime).toLocaleTimeString('ko-KR', {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true // 12시간제 (오전/오후)
                                    })}
                                </ContentCol>
                                <ContentCol>{data.totalPeople}</ContentCol>
                                <ContentCol>{convertButton(data.state)}</ContentCol>
                            </ContentRow>
                        )
                    })}
                </DataTable>
            </div>
        </div>
    )
}

export default BookingStore;