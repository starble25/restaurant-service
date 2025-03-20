import './Customer.css';
import { useState, useEffect } from 'react';
import MyInfo from './MyInfo';
import Withdraw from './Withdraw';
import Booking from './Booking';
import MyReview from './MyReview';

function Customer() {
    const [activeMenu, setActiveMenu] = useState('myInfo'); // 현재 활성화된 메뉴
    const [isEditing, setIsEditing] = useState(false);
    const id = 1; // users pk

    const [myInfo, setMyInfo] = useState(null);
    console.log('myInfo : ' + myInfo);

    function renderContent() {
        switch (activeMenu) {
            case 'myInfo':
                return <MyInfo 
                id={id} 
                myInfo={myInfo} 
                setMyInfo={setMyInfo} 
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                />;
            case 'booking':
                return <Booking 
                myInfo={myInfo}
                />;
            case 'myReviews':
                return <MyReview 
                myInfo={myInfo}
                />;
            case 'withdraw':
                return <Withdraw 
                id={id}
                />;
            default:
                return <div>content</div>;
        }
    }

    return (
        <div className='cusContainer'>
            <div className='side'>
                <div className={`sideMenu ${activeMenu === 'myInfo' ? 'active' : ''}`} 
                    onClick={() => {
                        setActiveMenu('myInfo');
                        setIsEditing(false);
                    }}
                >
                    내 정보
                </div>

                <div className={`sideMenu ${activeMenu === 'booking' ? 'active' : ''}`} 
                    onClick={() => setActiveMenu('booking')}
                >
                    예약 확인
                </div>

                <div className={`sideMenu ${activeMenu === 'myReviews' ? 'active' : ''}`} 
                    onClick={() => setActiveMenu('myReviews')}
                >
                    내 리뷰 목록
                </div>

                <div className={`sideMenu ${activeMenu === 'withdraw' ? 'active' : ''}`} 
                    onClick={() => setActiveMenu('withdraw')}
                > 
                    회원 탈퇴
                </div>
            </div>
            <div className='content'>
                {renderContent()}
            </div>
        </div>
    );
}

export default Customer;