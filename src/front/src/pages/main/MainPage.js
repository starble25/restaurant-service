import './MainPage.css';
import { useState } from "react";
// import { Input } from "../../components/ui/input";
// import { Button } from "../../components/ui/button";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { faUser, faCartShopping, faGift } from '@fortawesome/free-solid-svg-icons';
//import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function RedSpoon() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });
    };

    const categories = [
        { name: "레드스푼 맛집", count: 150, icon: "🥄" },
        { name: "음식 종류별 검색", count: 214, icon: "🍱" },
        { name: "지역별 검색", count: 185, icon: "🌍" },
        { name: "스토어", count: 200, icon: "🛒" },
        { name: "공지사항", count: 120, icon: "📌" },
        { name: "독자 게시판", count: 120, icon: "💬" },
    ];


    return (
        <div className="container">

            {/* 헤더 바 */}
            <header className="header">
                <a href="#" className="logo">
                    <img src="/images/logo" alt="레드스푼 로고"></img>
                </a>

                {/* 네브바 */}
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
                        <a href="#" title="스토어" className="collapsed">스토어</a>
                    </li>
                    <li className=''>
                        <a href="#" title="공지사항" className="collapsed">공지사항</a>
                    </li>

                    <li className=''>
                        <a href="#" title="독자 게시판" className="collapsed">독자 게시판</a>
                    </li>
                </nav>

                <div className="user-menu-container">
                    <button onClick={() => setIsOpen(!isOpen)} className="user-icon-button">
                        <FontAwesomeIcon icon={faUser} size="2x" />
                    </button>

                    {/* 로그인 페이지 관련 모달 창 */}
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

                {/* 메인 페이지 가운데 소개 글 */}

            <div className="listing-container">
                <div className="overlay">
                    <h1 className="title">BEST PLACE TO HAVE A HAPPY MEAL TIME</h1>
                    <p className="subtitle">Find Best Place, Restaurant, cafe and many more in just one click</p>



                    {/* 메인 페이지 가운데 검색 바 */}

                    <div className="search-container">
                        <input type="text" placeholder="맛집 검색어 입력" className="search-input" />
                        <button className="search-button">
                            🔍
                        </button>
                    </div>

                    {/* 메인 페이지 가운데 카테고리 섹션 */}
                    <div className="category-grid">
                        {categories.map((cat, index) => (
                            <div key={index} className="category-card">
                                <div className="category-icon">{cat.icon}</div>
                                <h3 className="category-name">{cat.name}</h3>
                                <p className="category-count">{cat.count} listings</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 매거진 섹션 */}
            <div className="magazine-section">
                <h2 className="magazine-title">블루리본 매거진</h2>
                <div className="magazine-grid">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="magazine-item">
                            <div className="magazine-image"></div>
                            <p className="magazine-article-title">기사 제목 {item}</p>
                            <p className="magazine-description">기사 요약 설명~!</p>
                        </div>
                    ))}
                </div>
            </div>

            {/*푸터*/}
            <footer className="footer">
                <div className="links">
                    <a href="#" className="hover:underline">이용약관</a>
                    <a href="#" className="hover:underline">개인정보처리방침</a>
                    <a href="#" className="hover:underline">사이트맵</a>
                </div>
                <p className="company-info">
                    상호 : 레드스푼 | 대표이사 : 먹을텐데 | 설립일 : 2025년 3월 6일 |
                    개인정보관리책임자 : 김성진
                </p>
                <p className="company-info">문의 : <a href="mailto:br@bluer.co.kr" className="hover:underline">br@bluer.co.kr</a></p>
                <p className="company-info">
                    충남 천안시 동남구 대흥로 215 7층, 8층
                </p>
                <div className="social-icons">
                    {/* <p className="footer-item">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </p>
                    <p className="footer-item">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </p>
                    <p className="footer-item">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </p> */}
                    {/* <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faGoogle} /> */}

                    {/* <Facebook className="hover:text-white" />
                    <Instagram className="hover:text-white" /> */}
                    <span className="language-switch">EN</span>
                </div>
                <p className="copyright">©Copyright 2021 BR Media Inc. | All Rights Reserved</p>

                {/* 오른쪽 하단 플로팅 버튼 */}
                <div className="floating-buttons">
                    <button className="scroll-up-btn" onClick={scrollToTop}>
                        ⬆️
                    </button>
                </div>
            </footer>

        </div>
    );
}
