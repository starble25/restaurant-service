import './Customer.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Customer() {
    const [activeMenu, setActiveMenu] = useState('myInfo'); // 현재 활성화된 메뉴
    const id = 1; // users pk
    const profileImagePath = '/profile/profileImage.jpg';

    const [myInfo, setMyInfo] = useState(null);

    // function myInfo() {
    //     axios.post('api/users', {id})
    //     .then( res => {
    //         console.log(res.data);
    //     })
    //     .catch( error => console.log(error) )
    // }

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

// 내 정보
function MyInfo({ id, myInfo, setMyInfo, profileImagePath }) {

    useEffect(() => {
        if( myInfo ) { // myInfo가 있으면 실행안함
            return;
        }

        axios.post('api/users', { id })
            .then( res => setMyInfo(res.data) )
            .catch( error => console.error(error) );
    }, [id, myInfo]);

    return (
        <div className='myInfo'>
            <div className='imgContainer'>
                <img src={profileImagePath} alt='profileImage' />
                <button>이미지 등록</button>
            </div>
            <div className='itemContainer'>
                <div className='item'>
                    <div className='type'>아이디</div>
                    <div>{myInfo.userName}</div>
                </div>
                <div className='item'>
                    <div className='type'>이름</div>
                    <div>{myInfo.name}</div>
                </div>
                <div className='item'>
                    <div className='type'>이메일</div>
                    <div>{myInfo.email}</div>
                </div>
                <div className='item'>
                    <div className='type'>전화번호</div>
                    <div>{myInfo.tel}</div>
                </div>
                <button>내정보 변경</button>
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