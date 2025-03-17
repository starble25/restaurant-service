import { useEffect, useState } from 'react';
import './DetailReview.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function DetailReview() {

    const [ reviewDataList, setReviewDataList ] = useState([]);
    const { storeId } = useParams();  // storeId를 URL 파라미터로 받아옵니다.

    useEffect(() => {
        console.log('storeId : ' + storeId);
        // storeId가 변경될 때마다 다시 데이터를 요청
        axios.get(`/main/store/review/${storeId}`)
            .then(response => {
                setReviewDataList(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching review data:", error);
            });
    }, [ storeId ]);




    return (

        <div>
            {
                reviewDataList.map((item, index) => (
                    <div>
                        <h3>{item.review.title}</h3>
                        <p>{item.review.content}</p>
                        <div>Rating: {item.review.rate}</div>
                    </div>
                ))
            }
        </div>
    )
}