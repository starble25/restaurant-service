import CustomBtn from '../../components/common/CustomBtn';
import './StoreInfo.css';
import { useState } from 'react';
import { InputModal, Title, Content, Input } from './InputModal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function StoreInfo({ store }) {
    const userId = 2;
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const storeData = {
        storeName : store && store.storeName,
        address : store && store.address,
        ceoName : store && store.ceoName,
        licenseNumber : store && store.licenseNumber
    };

    const handleSubmit = (formData) => {
        // console.log("InputModal formData :", formData);
        // 필요한 데이터 처리 로직 추가 (ex. API 호출 등)
    };

    const submitForm = (data) => {
        axios.post('/api/store/modify-store', {...data, userId})
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
                <InputModal 
                    closeModal={closeModal} 
                    submit={handleSubmit} 
                    action={submitForm} 
                    initValue={storeData}
                >
                    <Title>사업자 정보</Title>
                    <Content>
                        <Input name='storeName' initValue='달식당'>상호명</Input>
                        <Input name='address' initValue='충청남도 천안시 동남구 대흥로 215'>주소</Input>
                        <Input name='ceoName' initValue='박철수'>대표자명</Input>
                        <Input name='licenseNumber' initValue='1234567890'>사업자등록번호</Input>
                    </Content>
                </InputModal>
            }
        </div>
    )
}

export default StoreInfo;