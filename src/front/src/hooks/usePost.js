import { useEffect, useState } from "react";
import axios from "axios";


function usePost( url, param ) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if( !url ) {
            return;
        }

        axios.post(url, param)
        .then( res => {
            console.log(`usePose 요청 성공 : ${url} `);
            console.log(res);
            setData(res.data);
        })
        .catch( error => {
            console.log(`usePost 요청 실패 : ${url} `);
            console.log(error);
        })
    }, [url, param]);

    return data;
}

export default usePost;