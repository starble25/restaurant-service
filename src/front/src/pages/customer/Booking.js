import { useEffect, useState } from 'react';
import './Booking.css';
import axios from 'axios';

function Booking({ id }) {

    const [bookingInfo, setBookingInfo] = useState('');

    useEffect(() => {
        if( !id ) {
            return;
        }

        axios.post('api/booking/find-booking', id)
        .then( res => {
            console.log('find-booking 요청성공 : ' + res.data);
            setBookingInfo(res.data);
        })
        .catch( error => console.error(error) );

    }, []);

    const ListContent = () => {
        return (
            <li className='listContainer listContent'>
                <div className='listStyle contentStyle'>1</div>
                <div className='listStyle contentStyle'>달식당</div>
                <div className='listStyle contentStyle'>3명</div>
                <div className='listStyle contentStyle'>22:00</div>
                <div className='listStyle contentStyle'>예약완료</div>
            </li>
        )
    }

    return (
        <div className='bookingContainer'>
            <div className='titleWrapper'>
                <h3>예약 확인</h3>
            </div>
            <div className='bookingListWrapper'>
                <ol>
                    <li className='listContainer listTitle'>
                        <div className='listStyle titleStyle'>번호</div>
                        <div className='listStyle titleStyle'>식당 이름</div>
                        <div className='listStyle titleStyle'>예약 인원</div>
                        <div className='listStyle titleStyle'>예약 시간</div>
                        <div className='listStyle titleStyle'>분류(예약완료/예약중...)</div>
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