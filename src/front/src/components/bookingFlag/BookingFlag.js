import './BookingFlag.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function BookingFlag({ date, deactivateFlag, menu }) {

    const [ serving, setServing ] = useState(() => menu.map(() => 0)); //수량 부분 상태관리
    const [ index, setIndex ] = useState(0); //예약기능 인원수 상태관리
    const [ calculate, setCalculate ] = useState(0); //합계 상태관리
    const [ countPeople, setCountPeople ] = useState(0);
    const [ selected, setSelected ] = useState(null);

    const daysOfWeek = [ "일", "월", "화", "수", "목", "금", "토" ];
    const totalPeople = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]; //예약인원 토탈 10명까지


    //메뉴 업데이트에 따라 자동업데이트
    useEffect(() => {
        setServing(menu.map(() => 0));
    }, [ menu ]);

    // 합계 자동 계산
    useEffect(() => {
        const total = serving.reduce((sum, count, index) => sum + count * menu[ index ].price, 0);
        setCalculate(total.toLocaleString());
    }, [ serving, menu ]);


    //월/일 변환 함수
    const formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일 ${daysOfWeek[ date.getDay() ]}요일`;

    //예약 인원수 슬라이드 인덱스
    const itemPerPage = 5;

    //보여줄 인원수 박스
    const visibleBox = totalPeople.slice(index, index + itemPerPage);

    //총 인원수 상태관리
    const handlePeople = (people) => {
        setCountPeople(people);
        setSelected(people);
    };


    // 이전 || 다음 버튼
    function handleBox(type) {
        if (type == "previous" && index > 0) {
            setIndex(index - itemPerPage);
        } else if (type == "next" && index + itemPerPage < totalPeople.length) {
            setIndex(index + itemPerPage);
        }
    }

    //예약부분 수량 조절 버튼 기능
    const handleServing = (index, type) => {
        setServing((prev) => {
            const newServing = [ ...prev ];
            if (type == "plus") {
                newServing[ index ] += 1;
            } else if (type == "minus" && newServing[ index ] > 0) {
                newServing[ index ] -= 1;
            }
            return newServing;
        });
    };



    const { id } = useParams(); //url에서 받은 아이디 = store테이블 Id임

    //예약하기 버튼 클릭 -> 서버로 전송
    const handleBooking = async () => {

        const confirmBooking = window.confirm(
            `
            예약일: ${formattedDate}

            총 인원: ${countPeople}명

            합계 : ${calculate}원

            예약하시겠습니까 ?
            `
        );

        if (!confirmBooking) {
            window.location.reload();
            return; //위 내용 취소시 종료 
        }


        const reservationData = {
            userId: 1,
            storeId: id,
            totalPeople: countPeople,
            bookingTime: date.toISOString(),
            state: "CFM",
            menuItems: menu.map((item, index) => ({
                menuId: item.id,
                quantity: serving[ index ]
            })),
        };

        try {
            const response = await axios.post(`/main/store/${id}`, reservationData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status == 200) {
                alert('예약이 완료되었습니다.');
                deactivateFlag();

                setTimeout(() => {
                    window.location.reload();
                }, 500);
            } else {
                alert("예약에 실패했습니다.");
            }
        } catch (error) {
            console.error('Error during reservation:', error);
            alert("예약 처리 중 오류가 발생했습니다.");
        }
    };


    return (
        <div>
            <form>
                <div className='totalPeople-container'> 인원을 선택해주세요
                    <div className='totalPeople-header'>

                        <button type='button' onClick={() => handleBox('previous')} disabled={index === 0}>{"<"}</button>

                        <div className='totalPeople-section'>
                            {
                                visibleBox.map((item) => (
                                    <div onClick={() => handlePeople(item)} className={selected == item ? "active" : ""}>{item}명</div>
                                ))
                            }
                        </div>

                        <button type='button' onClick={() => handleBox('next')} disabled={index + itemPerPage >= totalPeople.length}>{">"}</button>
                    </div>
                </div>

                <div className='menu-container'>

                    <div>메뉴</div>
                    <div>가격</div>
                    <div>수량</div>

                    {menu.map((item, index) => (
                        <div className='menu-container-item'>

                            <div>{item.menuName}</div>
                            <div>{item.price.toLocaleString()}원</div>
                            <div>
                                <button type='button' onClick={() => handleServing(index, 'minus')}>-</button>
                                <span>{serving[ index ]}</span>
                                <button type='button' onClick={() => handleServing(index, 'plus')}>+</button>
                            </div>

                        </div >
                    ))}
                </div>

                <div className='cal-container'>

                    <div>
                        <div>예약일 :</div>
                        <div>{formattedDate}</div>
                    </div>

                    <div>
                        <div>총 인원 :</div>
                        <div>{countPeople > 0 ? countPeople + "명" : "선택 안됨"}</div>
                    </div>

                    <div>
                        <div>합 계 :</div>
                        <div>{calculate}원</div>
                    </div>

                </div>

                <div className='booking-btn'>
                    <button type='button' onClick={handleBooking}>예약하기</button>
                    <button type='button' onClick={deactivateFlag}>닫기</button>
                </div>


            </form >


        </div >
    )
}