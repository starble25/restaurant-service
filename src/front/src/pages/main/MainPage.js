import './MainPage.css';
import { useState, useEffect } from "react";
import { faUser, faCartShopping, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';



export default function RedSpoon() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ isOpen, setIsOpen ] = useState(false);
    const [ searchResults, setSearchResults ] = useState([]);
    const [ currentSlide, setCurrentSlide ] = useState(0);
    const [ showAll, setShowAll ] = useState(false); // 더보기 상태 관리
    const [ scrollProgress, setScrollProgress ] = useState(0); // 스크롤 진행률 상태

    const navigate = useNavigate();
    

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const categories = [
        { name: "레드스푼 맛집", count: 150, icon: "🥄" , path: "/main/store?spoon=3&rateValue=5"},
        { name: "음식 종류별 검색", count: 214, icon: "🍱" , path: "/main/store?foodType=한식"},
        { name: "지역별 검색", count: 185, icon: "🌍" , path: `/main/store?location=대구광역시`},
        { name: "공지사항", count: 120, icon: "📌" , path: "/board"},
        { name: "독자 게시판", count: 120, icon: "💬" , path: "/board"},
        { name: "리뷰 게시판", count: 120, icon: "💬" , path: "/board"}
    ];

    // 매거진 데이터 (이미지에 맞게 4개씩 표시하도록 수정)
    const slides = [
        { title: "국내 최고의 커피 전문 전시회 ‘2025 서울커피엑스포’ 개막", description: "(사)한국커피연합회와 함께하는 서울커피엑스포는 커피 전문 기기 및 장비를 비롯하여 원두, 원부재료, 기기류, 도구류, 포장용품까지 커피 산업에 필요한 모든 제품들을 한자리에서 만나볼 수 있는 전시회로, 상반기 커피 트렌드를 가장 빠르게 확인할 수 있는 B2B 커피산업전시회다. 서울커피엑스포는 구매 및 계약의 니즈가 높고 결정권을 가진 진성 바이어만을 전시회 바이어로 구분하여 진행한다.", image: "images/magazine1.jpg" },
        { title: "제주를 여행하는 푸디들을 위한 안내서 by 류크 - 두 번째 이야기, 일식, 중식&아시안", description: "제주 해비치 호텔 & 리조트가 리조트 쪽에 대대적인 리모델링을 진행하면서 식음 업장도 상당한 변화가 있었다. 그중 하나가 스시와 스키야키를 하는 메르앤테르다. ", image: "images/magazine2.jpg" },
        { title: "제주를 여행하는 푸디들을 위한 안내서 by 류크 - 첫 번째 이야기, 양식", description: "지금 제주의 다이닝씬은 위기를 기회 삼아 살아남기 위해 다양한 요리와 서비스를 선보이는 실력파 셰프들의 각축장이 되었다. 예전에는 오는 손님의 니즈를 만족시키는 정도로 훌륭했다면 지금은 식사를 하러 제주를 여행하고 싶은 마음이 들 정도로 훌륭해졌다. 지금이야말로 제주는 가장 맛있고, 가장 여행하기 좋은 여행지가 되었다.", image: "images/magazine3.jpg" },
        { title: "품격 있는 프렌치 다이닝을 합리적인 가격대로, 블루리본이 소개하는 프렌치 파인다이닝", description: "프렌치 파인다이닝의 섬세한 맛과 품격을 느끼며, 합리적인 가격대로 미식의 즐거움을 만끽해 보세요. <라뽀뜨>, <레스토랑제미>, <소넷>, <알레즈>, <윤>, <토우베> 6군데를 소개해 드립니다. (식당명 가나다 순)", image: "images/magazine4.jpg" },
        { title: "역대 최대 규모! ‘캘리포니아 와인 ALIVE 테이스팅 2025 서울’ 풍성한 프로그램 선보이며 성료, 산타 바바라 와인 x 정식스페이스 페어링 이벤트 성료", description: "지난 2월 27일(목), 캘리포니아와인협회(California Wine Institute, 이하 CWI)가 주최하는 캘리포니아 와인 얼라이브 테이스팅 2025(California Wines Alive Tasting 2025)이 역대 최대 규모로 개최되었다.", image: "images/magazine5.jpg" },
        { title: "글로벌 셰프들의 콜라보레이션, '50 베스트 시그니처 세션' 라인업 공개", description: "S.Pellegrino (산펠레그리노)와 Acqua Panna (아쿠아파나)가 후원하는 Asia's 50 Best Restaurants awards(아시아 50 베스트 레스토랑 시상식)가 내달 25일 다시 한번 대한민국 서울에서 열린다.", image: "images/magazine6.jpg" },
        { title: "봄의 내음을 맞이할 준비가 된, 2월의 뉴테이스트 by 김혜준 푸드 콘텐츠 디렉터", description: "2024년 후반, 가장 핫한 시작을 보여 준 니쿠노 쿄오리. 남산타운 아파트 앞 캐주얼한 일식 기반의 이 공간에서는 ‘고기의 고향’이라는 이름의 의미처럼 육류를 메인으로 일본주와 와인 등의 주류를 즐길 수 있다", image: "images/magazine7.jpg" },
        { title: "강추위를 포근하게 감싸주는, 2월의 커피 트렌드 by 심재범", description: "뒤늦은 강추위가 매서운 2월, 국가대표 바리스타 대회 심사위원 클라리멘토 커피, 연희동의 새로운 핫 플레이스 커피가게 동경, 미국 유학 출신 연구원 부부가 운영 중인 은평구의 파브스 커피를 소개한다. ", image: "images/magazine8.jpg" },
        { title: "[블루리본X르빵] 정통 프렌치 베이커리의 대중화, 르빵 바게트&크루아상 챔피언십 팝업스토어 | 블루리본 브레드 위크", description: "2025년 02월 15일부터 02월 24일까지, 신세계 장남점 스위트파크에서 팝업스토어에서 '블루리본x2024 르빵 바게트&크루아상 챔피언십' 수상으로 블루리본을 수여받은 7개 브랜드가 모여 신세계 강남점 스위트파크에서 팝업스토어를 선보인다.", image: "images/magazine9.jpg" },
        { title: "[블루리본X르빵] 2024르빵크루아상챔피언십 우승자 인터뷰 | 해월당 최정호 셰프", description: "2024년 12월 1일, 국내 최고 베이커를 선발하는 블루리본 x 2024르빵크루아상챔피언십의 시상식이 열렸습니다. 2024년에 처음으로 개최된 크루아상 부문의 우승은 해월당의 베이커가 차지했는데요. 2024년 르빵 크루아상 챔피언십의 우승자인 최정호 셰프를 소개합니다.", image: "images/magazine10.png" },
        { title: "[블루리본X르빵] 2024르빵바게트챔피언십 우승자 인터뷰 | 플라워베이커리 김다혜 셰프", description: "2024년 12월 1일, 국내 최고 베이커를 선발하는 블루리본 x 2024르빵바게트챔피언십의 시상식이 열렸습니다. 바게트 부문의 우승은 작년 조원준 셰프에 이어 플라워베이커리의 베이커가 차지했는데요. 2024년 르빵 바게트 챔피언십의 우승자인 김다혜 셰프를 소개합니다.", image: "images/magazine11.jpg" },
        { title: "경상남도 함양 오일장 - 김혜준의 동네 한바퀴 Ep. 10", description: "전통과 현대적 감각이 사이좋게 어우러지고 있는 지역 전통시장은 곳곳이 역사이며 위생과 편리한 운영을 위한 최선의 노력이 더해진 살아있는 상권이기에 셰프나 외식업 관련 업자들에게는 맛에 대한 많은 자극과 새로운 공부가 되어진다.", image: "images/magazine12.jpg" },
        { title: "1월의 커피 트렌드 by 심재범", description: "2025년 신규 스페셜티커피 매장으로 한국 최고의 여성 로스터로 손꼽히는 안지혜 로스터의 커피그라운즈 하루코빈즈, 방배동에서 화제가 되는 루베르 로스터리, 코리아 커피 위크 주관사에서 운영하는 제주 코스모스 커피와 2025년 브루어스컵(World Brewers Cup Championship): 컵테이스터(World Cup Tasters Championship) 한국 국가대표 선발전 소식을 함께 전한다.  ", image: "images/magazine13.png" },
        { title: "다양한 시도와 노련한 기술이 담긴 보물 같은 곳, 2024년 베스트 뉴테이스트 by 김혜준 푸드 콘텐츠 디렉터", description: "힘주고 찾아가는 다이닝이 아닌, 재미있고 조금은 편하게 즐길 수 있는 나만의 아지트. 요리의 퀄리티와 주류의 다양성에 맞춰 골라가는 재미가 있다. ", image: "images/magazine14.jpg" },
        { title: "12월의 뉴테이스트 by 김혜준 푸드 콘텐츠 디렉터", description: "2024년 한 해를 마무리하는 12월의 뉴테이스트. 채식 한식 다이닝 비움, 리틀앤머치의 컴백, 신상 스시야 스시의미, 서초동의 자랑 메종조의 2호점 오픈 소식을 전한다.", image: "images/magazine15.jpg" },
        { title: "2024년을 뜨겁게 달군 커피 트렌드 총결산 by 심재범", description: "한국 스페셜티 커피의 명가 커피리브레의 네 번째 매장이 연남동 본사 1층 커피리브레 파란점이라는 이름으로 새롭게 문을 열었다. 커피리브레 파란점의 명칭은 코스모스의 저자 칼세이건의 표현 아름답고 푸른 별 지구, 커피리브레 로고의 색이라는 파란색, 아울러 새롭게 지하 매장에 설치한 모로코 타일의 푸른색을 포함한 복합적인 의미를 가지고 있다.", image: "images/magazine16.jpg" }
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
            <div className="listing-container" >
                <div className="overlay">
                    <h1 className="title">BEST PLACE TO HAVE A HAPPY MEAL TIME</h1>
                    <p className="subtitle">Find Best Place, Restaurant, cafe and many more in just one click</p>
                    <div className="search-container">
                        <input type="text" placeholder="맛집 검색어 입력" className="search-input" />
                        <button className="search-button">🔍</button>
                    </div>
                    <div className="category-grid">
                        {categories.map((cat, index) => (
                            <div key={index} className="category-card" onClick={()=> navigate(cat.path)}>
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