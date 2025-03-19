import './MainPage.css';
import { useState, useEffect } from "react";
import { faUser, faCartShopping, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RedSpoon() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ isOpen, setIsOpen ] = useState(false);
    const [ searchResults, setSearchResults ] = useState([]);
    const [ currentSlide, setCurrentSlide ] = useState(0);
    const [ showAll, setShowAll ] = useState(false); // 더보기 상태 관리
    const [ scrollProgress, setScrollProgress ] = useState(0); // 스크롤 진행률 상태

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
        { name: "공지사항", count: 120, icon: "📌" },
        { name: "독자 게시판", count: 120, icon: "💬" },
        { name: "리뷰 게시판", count: 120, icon: "💬" }
    ];

    // 매거진 데이터 (이미지에 맞게 4개씩 표시하도록 수정)
    const slides = [
        { title: "[블루리본스토어] 창업 프로그램 비어파티", description: "2024년 2월 15일부터 2월 24일까지, 블루리본스토어에서 창업 프로그램 비어파티가 열립니다.", image: "/resources/images/foodmain.png" },
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
            }, 5000); // 5초마다 전환
            return () => clearInterval(interval);
        }
    }, [ showAll ]);

    // 더보기/접기 토글
    const toggleShowAll = () => {
        setShowAll(!showAll);
        setCurrentSlide(0); // 더보기 상태 변경 시 슬라이드 초기화
    };

    // 스크롤 이벤트 핸들러
    useEffect(() => {
        let timeout;
        const handleScroll = () => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                const textRevealElement = document.querySelector('.text-reveal-container');
                if (textRevealElement) {
                    const rect = textRevealElement.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const elementTop = rect.top + window.scrollY;
                    const elementHeight = rect.height;
                    const scrollPosition = window.scrollY + windowHeight;
                    const progress = Math.min(
                        Math.max(
                            (scrollPosition - elementTop) / (elementHeight + windowHeight),
                            0
                        ),
                        1
                    );
                    setScrollProgress(progress);
                }
            }, 10); // 10ms 디바운스
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 초기 렌더링 시 한 번 호출

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeout) clearTimeout(timeout);
        };
    }, []);

    //글자 -> 배열 전환
    const text1 = "레드스푼으로";
    const text2 = "만족스러운 식사를,";
    const text1Array = text1.split('');
    const text2Array = text2.split('');

    // 전체 글자 수 계산 (두 줄 합쳐서)
    const totalChars = text1Array.length + text2Array.length;

    return (
        <div className="maincontainer">
            {/* 헤더 바 */}

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

            {/* 스크롤 애니메이션 텍스트 섹션 */}
            <div className="text-reveal-container">
                <h2>
                    <div className="text-line">
                        {text1Array.map((char, index) => {
                            const charProgress = Math.min(
                                Math.max(
                                    (scrollProgress - (index / totalChars)) * totalChars,
                                    0
                                ),
                                1
                            );
                            return (
                                <span
                                    key={index}
                                    className="char"
                                    style={{
                                        color: `rgb(
                                ${255}, 
                                ${255 * (1 - charProgress)}, 
                                ${255 * (1 - charProgress)}
                            )`, // 흰색(#FFFFFF)에서 빨간색(#FF0000)으로
                                    }}
                                >
                                    {char}
                                </span>
                            );
                        })}
                    </div>
                    <br /><br />
                    <div className="text-line">
                        {text2Array.map((char, index) => {
                            const charIndex = index + text1Array.length;
                            const charProgress = Math.min(
                                Math.max(
                                    (scrollProgress - (charIndex / totalChars)) * totalChars,
                                    0
                                ),
                                1
                            );
                            return (
                                <span
                                    key={index}
                                    className="char colored-char"
                                    style={{
                                        color: `rgb(
                                ${255 * (1 - charProgress)}, 
                                ${255 * (1 - charProgress)}, 
                                ${255 * (1 - charProgress)}
                            )`, // 흰색(#FFFFFF)에서 검정색(#000000)으로
                                    }}
                                >
                                    {char}
                                </span>
                            );
                        })}
                    </div>
                </h2>
            </div>

            {/* 매거진 섹션 */}
            <div className="magazine-section">
                <div className="magazine-header">
                    <h2 className="magazine-title"> 📃 레드스푼 매거진</h2>
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
            <div className="floating-buttons">
                <button className="scroll-up-btn" onClick={scrollToTop}>⬆️</button>
            </div>

        </div>
    );
}