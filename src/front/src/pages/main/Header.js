import './MainPage.css';
import { faUser, faCartShopping, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";


export default function Header() {


    const [ isOpen, setIsOpen ] = useState(false);



    return (


        <header className="header">
            <a href="#" className="logo">
                <img src="/images/redspoonlogo.png" alt="레드스푼 로고"></img>
            </a>
            <nav className="navbar">
                <li className=''>
                    <a href="#" title="레드스푼 맛집" className="collapsed">레드스푼 맛집</a>
                </li>
                <li className=''>
                    <a href="#" title="음식 종류별 검색" className="collapsed">음식 종류별 검색</a>
                </li>
                <li className=''>
                    <a href="#" title="지역별 검색" className="collapsed">지역별 검색</a>
                </li>
                <li className=''>
                    <a href="#" title="스토어" className="collapsed">공지사항</a>
                </li>
                <li className=''>
                    <a href="#" title="공지사항" className="collapsed">독자 게시판</a>
                </li>
                <li className=''>
                    <a href="#" title="독자 게시판" className="collapsed">리뷰 게시판</a>
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
                            <li className="menu-item">
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span>장바구니</span>
                            </li>
                            <li className="menu-item">
                                <FontAwesomeIcon icon={faGift} />
                                <span>주문 내역</span>
                            </li>
                            <li className="menu-item">
                                <FontAwesomeIcon icon={faUser} />
                                <span>회원가입</span>
                            </li>
                            <li className="menu-item">
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