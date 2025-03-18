import './StoreInfoMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import DetailReview from '../../detailReview/DetailReview';
import { useState } from 'react';
import ReviewModal from '../../reviewFlag/ReviewModal';


export default function StoreInfoMain({ store, storeDetail, menu, id }) {

    const [isReviewModal, setIsReviewModal] = useState(false);

    const openReviewModal = () => setIsReviewModal(true);
    const closeReviewModal = () => setIsReviewModal(false);


    const storeFoodImgPath = "/store/sample.jpg";
    const storeSpoonImgPath = "/store/spoon.png";

    //스푼 개수 동적 출력
    const renderSpoons = (spoonCount) => {

        const spoonImg = [];
        for (let i = 0; i < spoonCount; i++) {
            spoonImg.push(<img src={storeSpoonImgPath} className='store-spoon' />);
        }
        return spoonImg;
    }

    // 평점 개수 동적 출력
    const renderStars = () => {
        const { rateCount, rateTotal } = store;
        const rateValue = rateCount > 0 ? rateTotal / rateCount : 0;
        const fullStars = Math.floor(rateValue); //전체 별개수
        const halfStars = rateValue - fullStars >= 0.5 ? 1 : 0; //반별 여부 -> 0.5보다 크면 1반환
        const emptyStars = 5 - fullStars - halfStars; // 빈별개수

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} className="full-star" />);
        }

        for (let i = 0; i < halfStars; i++) {
            stars.push(<FontAwesomeIcon icon={faStarHalfAlt} className="half-star" />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} className="empty-star" />);
        }

        return stars;
    }

    

    //메뉴섹션 리팩토링
    const menuMap = (key) => {
        return menu.map((item, index) => (
            <div key={index}>
                {key == "price" ? item[ key ].toLocaleString() : item[ key ]}
            </div>
        ))
    }


    return (

        <div className='storeInfo-main'>
            <div className='storeInfo_main_img_container'>
                <img src={storeFoodImgPath}></img>
                <img src={storeFoodImgPath}></img>
            </div>

            <div className='storeInfo_main_title'>
                <div>
                    <div>
                        <div>{store.storeName} {renderSpoons(store.spoon)}</div>
                    </div>
                    <div className='rating'>평점 : {renderStars()}
                        <span>({store.rateCount}명의 평가)</span>
                    </div>
                </div>
                <div>
                    <p>오시는길</p>
                    <div>{storeDetail.addressInfo}</div>
                </div>
            </div>



            <div className='storeInfo_main_contact'>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} className="icon-size" />
                        <strong>전화번호 : </strong>{storeDetail.tel}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} className="icon-size" />
                        <strong>주소 : </strong>{store.address}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendar} className="icon-size" />
                        <strong>예약 : </strong>{store.bookingState}
                    </div>
                </div>

                <div>
                    <div>
                        <FontAwesomeIcon icon={faClock} className="icon-size" />
                        <strong>영업시간 : </strong>{storeDetail.runtime}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSquareInstagram} className="icon-size" />
                        <strong>인스타주소란</strong>
                    </div>
                </div>
            </div>

            <div className='storeInfo_main_menuCon'>
                <div>
                    <div>메뉴</div>
                    {menuMap("menuName")}
                </div>

                <div>
                    <div>가격</div>
                    {menuMap("price")}
                </div>

                <div>
                    <div>종류</div>
                    {menuMap("menuType")}
                </div>
            </div>


            <div className='storeInfo_main_desc'>
                <div>
                    <div>요약</div>
                    <div>{storeDetail.menuDesc}</div>
                </div>
            </div>


            <div className='storeInfo_main_reviewCon'>
                <div>
                    <div className='storeInfo_main_reviewCon_header'>
                        레드스푼 구독자들의 리뷰
                    </div>
                    
                    {
                        isReviewModal && <ReviewModal closeReviewModal={closeReviewModal} />
                    }
                    
                    <div>
                        <div onClick={openReviewModal}>리뷰작성하러 가기</div>
                    </div>
                    <DetailReview id={id} />


                </div>
            </div>

        </div>
    )
}