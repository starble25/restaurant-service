import './BookingFlag.css';
import { useState } from 'react';



export default function BookingFlag({ date, deactivateFlag }) {


    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const totalPeople = ["1명", "2명", "3명", "4명", "5명", "6명", "7명", "8명", "9명", "10명"]

    //월/일 변환 함수
    const formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일 ${daysOfWeek[date.getDay()]}요일`;

    //현재 슬라이드 인덱스
    const [index, setIndex] = useState(0);
    const itemPerPage = 5;

    //보여줄 인원수 박스
    const visibleBox = totalPeople.slice(index, index + itemPerPage);

    // 이전으로 돌아가기 버튼
    function handleBox(type) {
        if (type == "previous" && index > 0) {
            setIndex(index - itemPerPage);
        } else if (type == "next" && index + itemPerPage < totalPeople.length) {
            setIndex(index + itemPerPage);
        }
    }


    return (
        <div>
            <form>
                <div className='totalPeople-container'> 인원을 선택해주세요
                    <div className='totalPeople-header'>

                        <button type='button' onClick={() => handleBox('previous')} disabled={index === 0}>{"<"}</button>

                        <div className='totalPeople-section'>
                            {
                                visibleBox.map((item) => (
                                    <div>{item}</div>
                                ))
                            }
                        </div>

                        <button type='button' onClick={() => handleBox('next')} disabled={index + itemPerPage >= totalPeople.length}>{">"}</button>
                    </div>
                </div>

                
            </form>

            <div>예약일 : {formattedDate}
                <button onClick={deactivateFlag}>닫기</button>
            </div>
        </div>
    )
}