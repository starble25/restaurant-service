import { useState } from 'react';
import './StoreInfoSub.css';
import KakaoMap from '../../kakamap/KakaoMap';
import BookingCalendar from '../../calendar/BookingCalendar';

export default function StoreInfoSub({ store, storeDetail, menu, storeAddress }) {


    const [ kakaoMapFlag, setKakaoMapFlag ] = useState(false);
    const storeMapImgPath = "/store/map.jpg";

    const [ date, setDate ] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    }


    return (

        <div className='storeInfo-sub'>

            <img src={storeMapImgPath} className='open-modal-btn' onClick={() => setKakaoMapFlag(true)}></img>

            <BookingCalendar onChange={onChange} selectedDate={date}/>

            {kakaoMapFlag && (
                <div className='modal-container' onClick={() => setKakaoMapFlag(false)}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>

                        <div style={{ width: '80%', height: '100%', position: 'relative' }}>
                            <KakaoMap storeAddress={storeAddress} />
                            <button className="close-btn" onClick={() => setKakaoMapFlag(false)}>닫기</button>
                        </div>


                    </div>
                </div>
            )}
        </div>
    )
}