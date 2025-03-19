import { useEffect, useState } from 'react';
import './DetailReview.css';
import axios from 'axios';

export default function DetailReview({ id }) {

    const [ reviewDataList, setReviewDataList ] = useState([]);
    const userName = "customer";


    useEffect(() => {
        console.log('storeId : ' + id); //storeId가져온지 디버깅

        axios.get(`/main/store/review/${id}`)
            .then(response => {
                setReviewDataList(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching review data:", error);
            });
    }, [ id ]);




    return (

        <div className='storeInfo-reviewContent'>
            {
                reviewDataList.map((item, index) => (
                    <div className='storeInfo-reviewSection'>
                        <div className='storeInfo-revivewHeader'>
                            <div>
                                유저 아이디 : {userName}
                            </div>
                            <div>
                                평점: {item.review.rate}점
                            </div>
                        </div>

                        {
                            item.reviewImages && item.reviewImages.length > 0 && (
                                <div className='reviewImages'>
                                    {item.reviewImages.map((image, imageIndex) => (
                                        <img className='reviewImage'
                                            src={`${image.urlFilePath}/${image.fileName}`} />
                                    ))}
                                </div>
                            )
                        }


                        <div>{item.review.content}</div>

                    </div>
                ))
            }
        </div>
    )
}