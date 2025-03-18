import './ReviewModal.css';
import { useState } from 'react';
import axios from 'axios';


export default function ReviewModal({ closeReviewModal, storeId }) {


    const [ formData, setFormData ] = useState({ title: '', rate: '', content: '' });

    const [ fileName, setFileName ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, [ name ]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFileName(e.target.files[ 0 ]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isLoading) return;
        setIsLoading(true);

        const form = new FormData();
        form.append('userId', 1);
        form.append('storeId', storeId);
        form.append('title', formData.title);
        form.append('content', formData.content);
        form.append('rate', parseInt(formData.rate));

        if (fileName) {
            form.append('image', fileName);
        }

        try {
            const response = await axios.post(`/main/store/review/${storeId}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
            setFormData({ title: '', rate: '', content: '' });
            setFileName(null);
            closeReviewModal();

        } catch (error) {
            console.error("리뷰 제출 실패:", error);
        } finally {
            setIsLoading(false);
        }

    }

    return (

        <div className="review-modal-container" onClick={closeReviewModal}>

            <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>

                <form onSubmit={handleSubmit}>

                    <div className="review-modal-body">
                        <div className="review-modal-body-header">레드스푼 리뷰</div>

                        <div className="review-content-title">제목 :</div>
                        <div className="review-input-group">
                            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="리뷰 제목을 입력하세요..." required />
                        </div>

                        <div className="review-rating-group">
                            <div className="review-content-title">평점 :</div>
                            <select name="rate" value={formData.rate} onChange={handleChange} required>
                                <option value="">점수 선택</option>
                                <option value="1">1점</option>
                                <option value="2">2점</option>
                                <option value="3">3점</option>
                                <option value="4">4점</option>
                                <option value="5">5점</option>
                            </select>
                        </div>

                        <div className="review-content-title">식당 사진 공유하기 :</div>
                        <div className="review-fileUpload">
                            <input type="file" onChange={handleFileChange} />
                        </div>

                        <div className="review-comment-group">
                            <div className="review-content-title">후기 :</div>
                            <textarea name="content" value={formData.content} onChange={handleChange} placeholder="리뷰를 입력하세요..." required />
                        </div>

                        <div className="review-modal-buttons">
                            <button type="button" onClick={closeReviewModal} disabled={isLoading}>닫기</button>
                            <button type="submit" disabled={isLoading}>{isLoading ? "제출 중..." : "제출"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}