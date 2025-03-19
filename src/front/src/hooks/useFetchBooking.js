import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchBooking = ( user ) => {
    const [bookingData, setBookingData] = useState(null);

    useEffect(() => {
        if( !user?.id ) {
            return;
        }

        const fetchBooking = async (user) => {
            try {
                console.log('=========');
                console.log(user);
                const res = await axios.post('/api/booking/find-booking', user);
                setBookingData(res.data);
                console.log('find-booking 요청성공' + res);
            } catch (error) {
                console.error('find-booking 요청실패' + error);
            }
        };

        fetchBooking(user);
    }, [user]);

    return { bookingData };
};

export default useFetchBooking;
