import './Company.css';
import axios from 'axios';
import { Activity, ActContainer } from './Activity';
import { useState, useEffect } from 'react';
import useFetchStore from './useFetchStore';
import useFetchBooking from './useFetchBooking';
import useFetchUser from './useFetchUser';

import BookingStore from './BookingStore';

function Company() {
    const storeId = 1;
    const id = 2;
    //const [userData, setUserData] = useState(null);
    const {userData} = useFetchUser(id);
    const {storeData} = useFetchStore(storeId);
    console.log('userData : ', userData);
    const {bookingData} = useFetchBooking(userData);
    console.log('bookingData : ' + bookingData);

    return (
        <div className='compContainer'>
            <div className='titleContainer'>
                <h2><span>{storeData && storeData.storeName}</span> 관리페이지</h2>
            </div>
            <div className='activityWrapper'>
                <Activity>
                    <ActContainer title={'오늘 예약'} text={'3개'} />
                    <ActContainer title={'내일 예약'} text={'5개'} />
                    <ActContainer title={'예약 상태'} text={'가능'} />
                </Activity>
            </div>
            <div className='bookingStoreWrapper'>
                <BookingStore 
                    bookingData={bookingData}
                />
            </div>
        </div>
    )
}

export default Company;