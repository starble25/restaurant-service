import "./StoreList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';



export default function StoreList({ storeList, menuList, storeDetailList }) {


    const storeFoodImgPath = "/store/sample.jpg";
    const storeSpoonImgPath = "/store/spoon.png";


    //스푼 개수 동적 출력
    const renderSpoons = (spoonCount) => {

        const spoonImg = [];
        for (let i = 0; i < spoonCount; i++) {
            spoonImg.push(<img src={storeSpoonImgPath} className="store-spoon" />);
        }
        return spoonImg;
    }

    // 평점 개수 동적 출력
    const renderStars = () => {
        const { rateCount, rateTotal } = storeList;
        const rateValue = rateCount > 0 ? rateTotal / rateCount : 0;
        const fullStars = Math.floor(rateValue); //전체 별개수
        const halfStars = rateValue - fullStars >= 0.5 ? 1 : 0; //반별 여부 -> 0.5보다 크면 1반환
        const emptyStars = 5 - fullStars - halfStars; // 빈별개수

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} />);
        }

        for (let i = 0; i < halfStars; i++) {
            stars.push(<FontAwesomeIcon icon={faStarHalfAlt} />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} className="empty-star"/>);
        }

        return stars;
    }

    return (

        <div className="store-card">
            {/* 이미지 */}
            <img src={storeFoodImgPath} className="store-image"></img>

            {/* 스푼개수 */}
            <div>{renderSpoons(storeList.spoon)}</div>

            {/* 가게명 & 평점 */}
            <div className="store-header">
                <div>{storeList.storeName}</div>
                <div className="rating-container">
                    <span className="rating">평점 : </span>
                    {renderStars()}
                </div>
            </div>

            {/* 전화 & 주소 */}
            <div className="store-info">
                <div className="info-row">
                    <div className="info-label">
                        <FontAwesomeIcon icon={faPhone} className="icon-size" />
                        <div>전화</div>
                    </div>
                    {
                        storeDetailList
                            .filter(detail => detail.storeId == storeList.id)
                            .map((item, index) => (
                                <div className="info-value" key={index} >{item.tel}</div>
                            ))
                    }
                </div>

                <div className="info-row">
                    <div className="info-label">
                        <FontAwesomeIcon icon={faLocationDot} className="icon-size" />
                        <div>주소</div>
                    </div>
                    <div className="info-value">{storeList.address}</div>
                </div>
            </div>

            <div className="store-menu">
                {
                    storeDetailList
                        .filter(detail => detail.storeId == storeList.id)
                        .map((item, index) => (
                            <div className="menu-item" key={index} dangerouslySetInnerHTML={{ __html: item.menuDesc }} ></div>
                        ))
                }
            </div>

        </div>
    )
}