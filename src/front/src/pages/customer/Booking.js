import { useEffect, useState } from 'react';
import './Booking.css';
import axios from 'axios';

function Booking({ id, myInfo }) {

    const [bookingInfo, setBookingInfo] = useState([]);
    // bookingInfo = {
    //     "id": 1,
    //     "userId": 1,
    //     "storeId": 1,
    //     "totalPeople": 4,
    //     "bookingRegTime": 1741755600000,
    //     "bookingTime": 1742029200000,
    //     "state": "예약완료"
    // }
    
    useEffect(() => {
        if (!myInfo || !myInfo.id) {
            return;
        }
    
        axios.post('api/booking/find-booking', myInfo)
            .then(async (res) => {
                console.log('find-booking 요청성공:', res.data);
    
                const bookingData = res.data;
                
                // 각 booking 항목에 storeName 추가
                const updatedBookingInfo = await Promise.all(
                    bookingData.map(async (item) => {
                        console.log('storeId : ' + item.storeId);
                        const storeResponse = await axios.post('api/booking/store-name', { storeId: item.storeId });
                        return { 
                            ...item, 
                            storeName: storeResponse.data.storeName 
                        };
                    })
                );
    
                setBookingInfo(updatedBookingInfo);
            })
            .catch((error) => console.error(error));
    }, [myInfo]);
    

    const ListContent = () => {
        //예약 기록 없을시
        if( bookingInfo.length === 0 ) {
            return (
                <li className='listContainer listContent'>
                    <div className='listStyle contentStyle' style={{width: '100%'}}>예약 기록이 없습니다</div>
                </li>
            );
        }

        return (
            bookingInfo.map((item) => {
                return (
                    <li className='listContainer listContent' key={item.id}>
                        <div className='listStyle contentStyle'>
                            {new Date(item.bookingTime).getFullYear()}&ndash;
                            {new Date(item.bookingTime).getMonth() + 1}&ndash;
                            {new Date(item.bookingTime).getDate()}
                        </div>
                        <div className='listStyle contentStyle'>
                            {new Date(item.bookingTime).toLocaleTimeString('ko-KR', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true // 12시간제 (오전/오후)
                            })}
                        </div>
                        <div className='listStyle contentStyle'>{item.storeName}</div>
                        <div className='listStyle contentStyle'>{item.totalPeople}명</div>
                        <div className='listStyle contentStyle'>{item.state}</div>
                    </li>
                );
            })
        )
    }

    const options = { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true // 12시간제 (오전/오후)
    };

    return (
        <div className='bookingContainer'>
            <div className='titleWrapper'>
                <h3>예약 확인</h3>
            </div>
            <div className='bookingListWrapper'>
                <ol>
                    <li className='listContainer listTitle'>
                        <div className='listStyle titleStyle'>날짜</div>
                        <div className='listStyle titleStyle'>예약 시간</div>
                        <div className='listStyle titleStyle'>식당 이름</div>
                        <div className='listStyle titleStyle'>예약 인원</div>
                        <div className='listStyle titleStyle'>분류</div>
                    </li>
                    <li className='listContainer listContent'>
                        <div className='listStyle contentStyle'>1</div>
                        <div className='listStyle contentStyle'>달식당</div>
                        <div className='listStyle contentStyle'>3명</div>
                        <div className='listStyle contentStyle'>22:00</div>
                        <div className='listStyle contentStyle'>예약완료</div>
                    </li>
                    <ListContent />
                </ol>
            </div>
        </div>
    )
}


export default Booking;