import './StoreInfoMain.css';


export default function StoreInfoMain( {store, storeDetail, menu}) {


    const storeFoodImgPath = "/store/sample.jpg";
    const storeSpoonImgPath = "/store/spoon.png";


    return (

        <div className='storeInfo-main'>
            <div className='storeInfo_main_img_container'>
                <img src={storeFoodImgPath}></img>
                <img src={storeFoodImgPath}></img>
            </div>

            <div>
                <div>식당 이름 받아와</div>
                <div>별점 몇점 (몇명의 평가) 등등</div>
            </div>
            <hr />

            <div>
                <div>
                    <div>전화번호</div>
                    <div>지역</div>
                    <div>예약여부</div>
                </div>

                <div>
                    <div>영업시간</div>
                    <div>인스타그램</div>
                </div>
            </div>
            <hr />

            <div>
                <div>
                    <div>메뉴</div>
                    <div>가격</div>
                </div>

                <div>
                    <div>메뉴타입</div>
                    <div>특징</div>
                </div>
            </div>
            <hr />

            <div>
                <div>리뷰</div>
                <div>유저별 리뷰 정보</div>
            </div>

        </div>
    )
}