import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
    const [loginError, setLoginError] = useState('');
    
    return (
        <div className="container">
            <form action="" method="post" className="mainBox">
                <h2 className="h2T">로그인</h2>
                <div className="labelT">아이디</div>
                <input type="text" name="id" id="nickname" className="input-group" />
                
                <div className="labelT">비밀번호</div>
                <input type="password" name="password" id="password" className="input-group" />

                {loginError && <p id="errorMessage" className="error-msg">{loginError}</p>}
                <br />
                <div className="subBox">
                    <div>
                        <input type="checkbox" defaultChecked /> 로그인 유지
                    </div>
                </div>
                <br />
                <button type="submit" className="input-login">로그인</button>
            </form>

            <div className="mainBox">
                <br />
                <div className="registerT1">계정이 없으신가요?</div>

                <button className="emailbtn btn" onClick={() => window.location.href = '/login/register'}>
                    <div className="emailT">
                        <i className="fa-solid fa-right-to-bracket"></i> 개인회원으로 가입하기
                    </div>
                </button>
                <button className="emailbtn btn" onClick={() => window.location.href = '/login/register'}>
                    <div className="emailT">
                        <i className="fa-solid fa-right-to-bracket"></i> 기업회원으로 가입하기
                    </div>
                </button>

                <button className="kakaobtn btn">
                    <div className="kakaoT">
                        <i className="fa-solid fa-comment"></i> 카카오로 가입하기
                    </div>
                </button>

                <button className="naverbtn btn">
                    <div className="naverT">
                        <i className="fa-solid fa-n"></i> 네이버로 가입하기
                    </div>
                </button>

                <button className="applebtn btn">
                    <div className="appleT">
                        <i className="fa-brands fa-apple"></i> Apple로 가입하기
                    </div>
                </button>

                <button className="facebookbtn btn">
                    <div className="facebookT">
                        <i className="fa-brands fa-facebook"></i> 페이스북으로 가입하기
                    </div>
                </button>

                <button className="googlebtn btn">
                    <div className="googleT">
                        <i className="fa-brands fa-google" style={{ color: '#e60000' }}></i> 구글로 가입하기
                    </div>
                </button>
            </div>
        </div>
    );
}

export default LoginPage;