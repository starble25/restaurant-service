import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingCalendar.css';



export default function BookingCalendar({ onChange, selectedDate }) {


    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

    const formattedDate = `${selectedDate.getMonth()+1}.${selectedDate.getDate()}(${daysOfWeek[selectedDate.getDay()]})`;


    return (
        <div className="bookingCalendar-container">
            <div>{formattedDate} 시간을 선택해 주세요</div>
            <Calendar onChange={onChange} value={selectedDate} />
            <p>선택된 날짜 : {selectedDate.toDateString()}</p>
        </div>
    )
}
