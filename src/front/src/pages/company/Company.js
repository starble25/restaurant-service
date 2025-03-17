import './Company.css';
import axios from 'axios';
import { Activity, ActContainer } from './Activity';
import { useState, useEffect } from 'react';
import useFetchStore from '../../hooks/useFetchStore';
import useFetchBooking from '../../hooks/useFetchBooking';
import useFetchUser from '../../hooks/useFetchUser';
import StoreInfo from './StoreInfo';
import BookingStore from './BookingStore';
import StoreDetailInfo from './StoreDetailInfo';

function Company() {
    const storeId = 1;
    const id = 2;
    //const [userData, setUserData] = useState(null);
    const {userData} = useFetchUser(id);
    const {storeData} = useFetchStore(storeId);
    const {bookingData} = useFetchBooking(userData);
    console.table(userData);
    console.table(bookingData);
    console.table(storeData);

    function renderContent() {
        
    }

    return (
        <div className='compContainer'>
            <div className='titleContainer'>
                <h2><span>{storeData && storeData.storeName}</span> 관리페이지</h2>
            </div>
            <div className='activityWrapper'>
                <Activity>
                    <ActContainer title={'SPOON'} text={storeData && storeData.spoon} />
                    <ActContainer title={'별점'} text={storeData && (storeData.rateTotal/storeData.rateCount).toFixed(2)} />
                    <ActContainer title={'리뷰 수'} text={storeData && storeData.rateCount+'개'} />
                </Activity>
            </div>
            <div className='storeInfoWrapper'>
                <StoreInfo store={storeData} />
            </div>

            <div className='storeDetailWrapper'>
                <StoreDetailInfo store={storeData} />
            </div>

            <div className='activityWrapper'>
                <Activity>
                    <ActContainer title={'오늘 예약'} text={'3개'} />
                    <ActContainer title={'내일 예약'} text={'5개'} />
                    <ActContainer title={'예약 상태'} text={'가능'} />
                </Activity>
            </div>
            <div className='bookingStoreWrapper'>
                {bookingData ? (
                    <BookingStore booking={bookingData} />
                ) : (
                    <p>Loading bookings...</p>
                )}
            </div>
        </div>
    )
}

export default Company;