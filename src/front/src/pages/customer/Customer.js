import './Customer.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MyInfo from './MyInfo';

function Customer() {
    const [activeMenu, setActiveMenu] = useState('myInfo'); // 현재 활성화된 메뉴
    const id = 1; // users pk
    const profileImagePath = '/profile/profileImage.jpg';

    const [myInfo, setMyInfo] = useState(null);

    function renderContent() {
        switch (activeMenu) {
            case 'myInfo':
                return <MyInfo 
                id={id} 
                myInfo={myInfo} 
                setMyInfo={setMyInfo} 
                profileImagePath={profileImagePath} 
                />;
            case 'booking':
                return <Booking />;
            case 'myReviews':
                return <MyReviews />;
            case 'withdraw':
                return <Withdraw />;
            default:
                return <div>content</div>;
        }
    }

    return (
        <div className='cusContainer'>
            <div className='side'>
                <div className='sideMenu' onClick={() => setActiveMenu('myInfo')}>
                    내 정보
                </div>
                <div className='sideMenu' onClick={() => setActiveMenu('booking')}>
                    예약 확인
                </div>
                <div className='sideMenu' onClick={() => setActiveMenu('myReviews')}>
                    내 글 목록
                </div>
                <div className='sideMenu' onClick={() => setActiveMenu('withdraw')}>
                    회원 탈퇴
                </div>
            </div>
            <div className='content'>
                {renderContent()}
            </div>
        </div>
    );
}


// 예약
function Booking() {
    return (
        <div>예약 화면입니다.</div>
    );
}

// 내 글 목록
function MyReviews() {
    return (
        <div>내 글 목록입니다.</div>
    );
}

// 회원 탈퇴
function Withdraw() {
    return (
        <div>회원 탈퇴 화면입니다.</div>
    );
}

export default Customer;