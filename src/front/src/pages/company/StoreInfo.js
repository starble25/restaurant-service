import CustomBtn from '../../components/common/CustomBtn';
import './StoreInfo.css';
import { useState } from 'react';
import { InputModal, Title, Content, Input } from './InputModal';

function StoreInfo({ store }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (formData) => {
        console.log("InputModal formData :", formData);
        // 필요한 데이터 처리 로직 추가 (ex. API 호출 등)
    };


    return (
        <div className='storeInfoContainer'>
            <div className='containerTitle'>
                <h3>사업자 정보</h3>
            </div>
            <div className='storeInfo'>
                <div className='infoBox'>
                    <div className='infoTitle'>상호명</div>
                    <div className='infoContent'>{store && store.storeName}</div>
                </div>
                <div className='infoBox'>
                    <div className='infoTitle'>주소</div>
                    <div className='infoContent'>{store && store.address}</div>
                </div>
            </div>
            <div className='storeInfo'>
                <div className='infoBox'>
                    <div className='infoTitle'>대표자명</div>
                    <div className='infoContent'>{store && store.ceoName}</div>
                </div>
                <div className='infoBox'>
                    <div className='infoTitle'>사업자등록번호</div>
                    <div className='infoContent'>
                        {store && `${String(store.licenseNumber).slice(0, 3)} - ${String(store.licenseNumber).slice(3, 5)} - ${String(store.licenseNumber).slice(5)}`}
                    </div>
                </div>
            </div>
            <div className='buttonWrap'>
                <CustomBtn onClick={openModal}>수정하기</CustomBtn>
            </div>
            {isModalOpen && 
                <InputModal closeModal={closeModal} submit={handleSubmit}>
                    <Title>사업자 정보</Title>
                    <Content>
                        <Input name='storeName'>상호명</Input>
                        <Input name='address'>주소</Input>
                        <Input name='ceoName'>대표자명</Input>
                        <Input name='licenseNumber'>사업자등록번호</Input>
                    </Content>
                </InputModal>
            }
        </div>
    )
}

export default StoreInfo;