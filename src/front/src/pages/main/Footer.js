import './Footer.css';


export default function Footer() {

    return (

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
            
        </footer>

    )
}