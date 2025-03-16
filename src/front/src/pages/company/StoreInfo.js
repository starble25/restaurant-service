import CustomBtn from '../../components/common/CustomBtn';
import './StoreInfo.css';
import { useState } from 'react';
import { Activity, ActContainer } from './Activity';

function StoreInfo({ store }) {
    const [edit, setEdit] = useState(false);

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
                <CustomBtn>수정하기</CustomBtn>
            </div>
        </div>
    )
}

export default StoreInfo;