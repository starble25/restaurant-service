import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchStore = (storeId) => {
    const [storeData, setStoreData] = useState(null);

    useEffect(() => {
        const fetchStore = async (id) => {
            try {
                const res = await axios.post('/api/store/find-store', { id });
                setStoreData(res.data);
                console.log('find-store 요청성공' + res);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStore(storeId);
    }, [storeId]);

    return { storeData };
};

export default useFetchStore;