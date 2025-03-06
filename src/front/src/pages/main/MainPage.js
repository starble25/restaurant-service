import './MainPage.css';
import { useState } from "react";
// import { Input } from "../../components/ui/input";
// import { Button } from "../../components/ui/button";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
// import {fa-solid fa-user} from '@fortawesome/free-solid-svg-icons';
import { faUser, faCartShopping, faGift, faReceipt, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function BlueRibbonSurvey() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);


    const data = [
        { id: 1, name: "맛집 A" },
        { id: 2, name: "맛집 B" },
        { id: 3, name: "맛집 C" },
        { id: 4, name: "맛집 D" },
    ];

    const handleSearch = () => {
        const results = data.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
        console.log("검색어:", searchTerm, "검색 결과:", results);
    }



    return (
        <div className="container">
            {/* 헤더 */}
            {/* <header className="header">
                    <h1 className="title">RED SPOON</h1>
                    <Button variant="outline" className="login-button">로그인</Button>
                </header> */}
            <header className="header">
                <a href="#" className="logo">
                    <img src="/images/logo" alt="레드스푼 로고"></img>
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
                        <FontAwesomeIcon icon={faUser} />
                    </button>


                    {/* 모달 창 */}
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


            {/*검색 섹션*/}
            <div className="search-section">
                <h2 className="search-title">안녕하세요, 레드스푼 입니다.</h2>
                <p className="search-description">어떤 맛집을 찾으시나요?</p>
                <div className="search-bar">
                    <Input
                        type="text"
                        placeholder="맛집 검색어 입력"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    {/* <Button variant="solid" className="search-button">
                        <Search className="search-icon" />
                    </Button> */}
                    <button onClick={handleSearch} className="search-button">
                        🔍
                    </button>
                </div>

                <div className="search-results">
                    {searchResults.length > 0 ? (
                        <ul>
                            {searchResults.map((result) => (
                                <li key={result.id}>{result.name}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>검색 결과가 없습니다.</p>
                    )}
                </div>
            </div>


            {/* 카테고리
            <div className="category-section">
                {["스푼 맛집 검색", "음식 종류별 검색", "지역별 검색", "스토어"].map(
                    (category, index) => (
                        <div key={index} className="category-item">
                            {category}
                        </div>
                    )
                )}
            </div> */}

            {/* 카테고리 */}
            <div class="category-box">
                <div className="category-section">
                    <div class="main-header-area">
                        <a href="#">
                            <label>
                                <img src="/images/category1.png"></img>
                                <span>스푼 맛집 검색</span>
                            </label>
                        </a>
                        <a href="#">
                            <label>
                                <img src="/images/category2.png"></img>
                                <span>음식 종류별 검색</span>
                            </label>
                        </a>
                        <a href="#">
                            <label>
                                <img src="/images/category3.png"></img>
                                <span>지역별 검색</span>
                            </label>
                        </a>
                        <a href="#">
                            <label>
                                <img src="/images/category4.png"></img>
                                <span>스토어</span>
                            </label>
                        </a>
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
        </div>
    );
}
