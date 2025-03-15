import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchUser = (userId) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUser = async (id) => {
            try {
                const res = await axios.post('api/users/find-user', { id });
                setUserData(res.data);
                console.log('find-user 요청성공' + res);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser(userId);
    }, [userId]);

    return { userData };
};

export default useFetchUser;
