import { useState } from 'react';
import './StoreInfoSub.css';
import KakaoMap from '../../kakamap/KakaoMap';
import BookingCalendar from '../../calendar/BookingCalendar';
import BookingFlag from '../../bookingFlag/BookingFlag';


export default function StoreInfoSub({ store, storeDetail, menu, storeAddress }) {


    const [kakaoMapFlag, setKakaoMapFlag] = useState(false);
    const [bookingFlag, setBookingFlag] = useState(false);
    const storeMapImgPath = "/store/map.jpg";

    const [date, setDate] = useState(new Date());
    

    //캘린더 날짜
    const onChange = (newDate) => {
        setDate(newDate);
    }

    //예약모달
    const activateFlag = () => {
        setBookingFlag(true);
    }

    // 예약 모달을 닫기기
    const deactivateFlag = () => {
        setBookingFlag(false);
    };


    return (

        <div className='storeInfo-sub-container'>

            <div className='storeInfo-sub-con'>
                <img src={storeMapImgPath} className='open-modal-btn' onClick={() => setKakaoMapFlag(true)}></img>

                <BookingCalendar onChange={onChange} date={date} activateFlag={activateFlag} deactivateFlag={deactivateFlag}/>
                {
                    bookingFlag && (<BookingFlag date={date} deactivateFlag={deactivateFlag} menu={menu}/>)
                }

                {kakaoMapFlag && (
                    <div className='modal-container' onClick={() => setKakaoMapFlag(false)}>
                        <div className='modal-content' onClick={(e) => e.stopPropagation()}>

                            <div style={{ width: '80%', height: '100%', position: 'relative' }}>
                                <KakaoMap storeAddress={storeAddress} storeName={store.storeName} />
                                <button className="close-btn" onClick={() => setKakaoMapFlag(false)}>닫기</button>
                            </div>


                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}