import './MainPage.css';
import { useState, useEffect } from "react";
import { faUser, faCartShopping, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RedSpoon() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showAll, setShowAll] = useState(false); // 더보기 상태 관리

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
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

    // 매거진 데이터 (이미지에 맞게 4개씩 표시하도록 수정)
    const slides = [
        { title: "[블루리본스토어] 창업 프로그램 비어파티", description: "2024년 2월 15일부터 2월 24일까지, 블루리본스토어에서 창업 프로그램 비어파티가 열립니다.", image: "images/foodmain.png" },
        { title: "[블루리본스토어] 2023 블루포인샵", description: "2024 블루리본스토어에서 열리는 연수 과정의 1차 특별한 기회!", image: "images/foodmain.png" },
        { title: "[블루리본스토어] 2024 베이커리 트렌드", description: "미쉐린 우승자 안티가 특별한 도전!", image: "images/foodmain.png" },
        { title: "간단한 한입 양식 - 김해로 등 내 반려견 Ep. 10", description: "새로운 요리법! 김치와 함께하는 맛있는 나들이.", image: "images/foodmain.png" },
        { title: "기사 제목 5", description: "기사 요약 설명~!", image: "images/foodmain.png" },
        { title: "기사 제목 6", description: "기사 요약 설명~!", image: "images/foodmain.png" },
        { title: "기사 제목 7", description: "기사 요약 설명~!", image: "images/foodmain.png" },
        { title: "기사 제목 8", description: "기사 요약 설명~!", image: "images/foodmain.png" },
        { title: "기사 제목 9", description: "기사 요약 설명~!", image: "images/foodmain.png" },
        { title: "기사 제목 10", description: "기사 요약 설명~!", image: "images/foodmain.png" },
        { title: "기사 제목 11", description: "기사 요약 설명~!", image: "images/foodmain.png" },
        { title: "기사 제목 12", description: "기사 요약 설명~!", image: "images/foodmain.png" },
        { title: "기사 제목 13", description: "기사 요약 설명~!", image: "images/foodmain.png" },
        { title: "기사 제목 14", description: "기사 요약 설명~!", image: "images/foodmain.png" },
        { title: "기사 제목 15", description: "기사 요약 설명~!", image: "images/foodmain.png" },
        { title: "기사 제목 16", description: "기사 요약 설명~!", image: "images/foodmain.png" }
    ];

    // 슬라이드 자동 전환 (4개씩 표시하므로 슬라이드 개수는 slides.length / 4)
    useEffect(() => {
        if (!showAll) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % Math.ceil(slides.length / 4));
            }, 3000); // 3초마다 전환
            return () => clearInterval(interval);
        }
    }, [showAll]);

    // 더보기/접기 토글
    const toggleShowAll = () => {
        setShowAll(!showAll);
        setCurrentSlide(0); // 더보기 상태 변경 시 슬라이드 초기화
    };

    return (
        <div className="container">
            {/* 헤더 바 */}
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
                    <div className="search-container">
                        <input type="text" placeholder="맛집 검색어 입력" className="search-input" />
                        <button className="search-button">🔍</button>
                    </div>
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
                <div className="magazine-header">
                    <h2 className="magazine-title">레드스푼 매거진</h2>
                    <button className="more-button" onClick={toggleShowAll}>
                        {showAll ? "접기" : "더보기 >"}
                    </button>
                </div>
                {showAll ? (
                    <div className="magazine-grid">
                        {slides.map((slide, index) => (
                            <div key={index} className="magazine-item">
                                <div className="magazine-image" style={{ backgroundImage: `url(${slide.image})` }}></div>
                                <p className="magazine-article-title">{slide.title}</p>
                                <p className="magazine-description">{slide.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="magazine-slider">
                        <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {Array(Math.ceil(slides.length / 4))
                                .fill()
                                .map((_, slideIndex) => (
                                    <div key={slideIndex} className="slide-group">
                                        {slides.slice(slideIndex * 4, (slideIndex + 1) * 4).map((slide, index) => (
                                            <div key={index} className="magazine-item">
                                                <div className="magazine-image" style={{ backgroundImage: `url(${slide.image})` }}></div>
                                                <p className="magazine-article-title">{slide.title}</p>
                                                <p className="magazine-description">{slide.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                        </div>
                        <button className="slider-prev" onClick={() => setCurrentSlide((prev) => (prev - 1 + Math.ceil(slides.length / 4)) % Math.ceil(slides.length / 4))}>◄</button>
                        <button className="slider-next" onClick={() => setCurrentSlide((prev) => (prev + 1) % Math.ceil(slides.length / 4))}>►</button>
                        <div className="slider-dots">
                            {Array(Math.ceil(slides.length / 4))
                                .fill()
                                .map((_, dotIndex) => (
                                    <span
                                        key={dotIndex}
                                        className={`dot ${dotIndex === currentSlide ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(dotIndex)}
                                    ></span>
                                ))}
                        </div>
                    </div>
                )}
            </div>

            {/* 푸터 */}
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
                    <span className="language-switch">EN</span>
                </div>
                <p className="copyright">©Copyright 2021 BR Media Inc. | All Rights Reserved</p>
                <div className="floating-buttons">
                    <button className="scroll-up-btn" onClick={scrollToTop}>⬆️</button>
                </div>
            </footer>
        </div>
    );
}