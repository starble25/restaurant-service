import './MainPage.css';
import { faUser, faCartShopping, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function Header() {


    const [ isOpen, setIsOpen ] = useState(false);
    const navigate = useNavigate();


    const handlePrepare = () => {
        setIsOpen(false);
        setTimeout(() => {
            alert("서비스 준비중입니다.");
        }, 100);
    }

    const handleRegister = () => {
        setIsOpen(false);
        setTimeout(() => {
            navigate("/login/register");
        }, 100);
    }

    const handleLogin = () => {
        setIsOpen(false);
        setTimeout(() => {
            navigate("/login");
        }, 100);
    }


    return (


        <header className="header">
            <a href="/main" className="logo">
                <img src="/images/redspoonlogo.png" alt="레드스푼 로고"></img>
            </a>
            <nav className="navbar">
                <li className=''>
                    <a href="/main/store?spoon=3&rateValue=5" title="레드스푼 맛집" className="collapsed">레드스푼 맛집</a>
                </li>
                <li className=''>
                    <a href="/main/store?foodType=한식" title="음식 종류별 검색" className="collapsed">음식 종류별 검색</a>
                </li>
                <li className=''>
                    <a href="/main/store?location=대구광역시" title="지역별 검색" className="collapsed">지역별 검색</a>
                </li>
                <li className=''>
                    <a href="/board" title="공지사항" className="collapsed">공지사항</a>
                </li>
                <li className=''>
                    <a href="/board" title="독자 게시판" className="collapsed">독자 게시판</a>
                </li>
                <li className=''>
                    <a href="/board" title="리뷰 게시판" className="collapsed">리뷰 게시판</a>
                </li>
            </nav>
            <div className="user-menu-container">
                <button onClick={() => setIsOpen(!isOpen)} className="user-icon-button">
                    <FontAwesomeIcon icon={faUser} size="2x" />
                </button>
                {isOpen && (
                    <div className="user-menu-modal">
                        <p className="menu-title">장바구니가 비어 있습니다.</p>
                        <ul className="menu-list">
                            <li className="menu-item" onClick={handlePrepare}>
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span>장바구니</span>
                            </li>
                            <li className="menu-item" onClick={handlePrepare}>
                                <FontAwesomeIcon icon={faGift} />
                                <span>주문 내역</span>
                            </li>
                            <li className="menu-item"  onClick={handleRegister}>
                                <FontAwesomeIcon icon={faUser} />
                                <span>회원가입</span>
                            </li>
                            <li className="menu-item"  onClick={handleLogin}>
                                <FontAwesomeIcon icon={faUser} />
                                <span>로그인</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>

    )
}