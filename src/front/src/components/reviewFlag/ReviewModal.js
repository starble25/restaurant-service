import './ReviewModal.css';


export default function ReviewModal({ closeReviewModal }) {

    return (
        <div className="review-modal-container" onClick={closeReviewModal}>

            <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>


                <div className="review-modal-body">

                    <div className="review-modal-body-header">레드스푼 리뷰</div>

                    <div>제목</div>
                    <div className="review-input-group">
                        <input type="text" id="title" placeholder="리뷰 제목을 입력하세요..." />
                    </div>

                    <div className="review-rating-group">
                        <label htmlFor="rating">평점</label>
                        <select id="rating">
                            <option value="1">1점</option>
                            <option value="2">2점</option>
                            <option value="3">3점</option>
                            <option value="4">4점</option>
                            <option value="5">5점</option>
                        </select>
                    </div>

                    <div className="review-comment-group">
                        <label htmlFor="review">후기</label>
                        <textarea id="review" placeholder="리뷰를 입력하세요..." />
                    </div>
                </div>

                <div className="review-modal-buttons">
                    <button onClick={closeReviewModal}>닫기</button>
                    <button>제출</button>
                </div>

            </div>
        </div>
    );

}