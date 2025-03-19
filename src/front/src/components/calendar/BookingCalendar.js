import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingCalendar.css';



export default function BookingCalendar({ onChange, date, activateFlag }) {


    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

    const formattedDate = `${date.getMonth() + 1}.${date.getDate()}(${daysOfWeek[date.getDay()]})`;

    const today = new Date();
    today.setHours(0,0,0,0); //오늘 날짜를 0시0분0초로 설정


    return (
        <div className="bookingCalendar-container">
            <div>{formattedDate} 시간을 선택해 주세요</div>
            <Calendar onChange={onChange} value={date} onClickDay={activateFlag} tileDisabled={({date})=> date < today}/>
        </div>
    )
}
