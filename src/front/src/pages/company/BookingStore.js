import './BookingStore.css';
import { DataTable, TitleRow, TitleCol, ContentRow, ContentCol } from './DataTable';

function BookingStore({ bookingData }) {

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
                    <ContentRow>
                        <ContentCol>1</ContentCol>
                        <ContentCol>{bookingData && bookingData.bookingTime}</ContentCol>
                        <ContentCol>3</ContentCol>
                        <ContentCol>4</ContentCol>
                        <ContentCol>5</ContentCol>
                    </ContentRow>
                </DataTable>
            </div>
        </div>
    )
}

export default BookingStore;