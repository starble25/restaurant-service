import CustomBtn from "../../components/common/CustomBtn";
import { DataBox, BoxTitle, Row, Col, Btn } from "../../components/common/DataBox";
import usePost from "../../hooks/usePost";
import './StoreDetailInfo.css';

function StoreDetailInfo({ store }) {
    console.log('store : ' + store);
    const storeDetail = usePost('api/storeDetail/find-detail', store);
    console.log(storeDetail);

    function formatTime(time) {
        // 숫자를 두 자리 시간과 분으로 변환
        const hours = Math.floor(time / 100).toString().padStart(2, '0'); // 시
        const minutes = (time % 100).toString().padStart(2, '0'); // 분
        return `${hours}:${minutes}`;
    }

    return (
        <>
        <div className='dataBoxWrapper'>
            <DataBox>
                <BoxTitle>식당 상세소개</BoxTitle>
                <Row>
                    <Col title='오시는 길' content={storeDetail && storeDetail.addressInfo}/>
                    <Col title='연락처' content={storeDetail && storeDetail.tel}/>
                </Row>
                <Row>
                    <Col title={'오픈 시간'} content={storeDetail && formatTime(storeDetail.openTime)} />
                    <Col title={'마감 시간'} content={storeDetail && formatTime(storeDetail.closeTime)} />
                </Row>
                <Row>
                    <Col title='메뉴 설명' content={storeDetail && storeDetail.menuDesc} />
                </Row>
                <Row>
                    <Col title='식당 소개' content={storeDetail && storeDetail.note} />
                </Row>
                <Btn>
                    <CustomBtn>수정하기</CustomBtn>
                </Btn>
            </DataBox>
        </div>
        </>
    )
}

export default StoreDetailInfo;