import CustomBtn from "../../components/common/CustomBtn";
import { DataBox, BoxTitle, Row, Col, Btn } from "../../components/common/DataBox";
import { InputModal, Title, Content, Input } from './InputModal';
import usePost from "../../hooks/usePost";
import './StoreDetailInfo.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function StoreDetailInfo({ store }) {
    const navigate = useNavigate();
    const storeDetail = usePost('/api/storeDetail/find-detail', store);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    function formatTime(time) {
        // 숫자를 두 자리 시간과 분으로 변환
        const hours = Math.floor(time / 100).toString().padStart(2, '0'); // 시
        const minutes = (time % 100).toString().padStart(2, '0'); // 분
        return `${hours}:${minutes}`;
    }

    const submitForm = (data) => {
        axios.post('/api/store/modify-detail', {...data, id: storeDetail.storeId})
        .then( res => {
            console.log('submitForm 성공: ' + res);
            closeModal(); // setIsModalOpen(false);
            navigate(0);
        })
        .catch( error => {
            console.log('submitForm 실패:' + error);
            alert('업데이트 실패');
        })
    }

    const handleSubmit = (formData) => {
        // console.log("InputModal formData :", formData);
    };

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
                    <CustomBtn onClick={openModal}>수정하기</CustomBtn>
                </Btn>
            </DataBox>
            {isModalOpen && 
                <InputModal 
                    closeModal={closeModal} 
                    submit={handleSubmit} 
                    action={submitForm} 
                    initValue={storeDetail}
                >
                    <Title>식당 상세소개</Title>
                    <Content>
                        <Input name='addressInfo'>오시는 길</Input>
                        <Input name='tel'>연락처</Input>
                        <Input name='openTime'>오픈 시간</Input>
                        <Input name='closeTime'>마감 시간</Input>
                        <Input name='menuDesc'>메뉴 설명</Input>
                        <Input name='note'>식당 소개</Input>
                    </Content>
                </InputModal>
            }
        </div>
        </>
    )
}

export default StoreDetailInfo;