import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
import axios from "axios";

function LoginPage() {
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/login", formData, { withCredentials: true });

            if (response.status === 200) {
                alert("로그인 성공!");
                sessionStorage.setItem("loginUser", JSON.stringify(response.data.userName));
                // 세션에 로그인 정보가 저장되므로, 페이지 이동
                navigate("/main"); // 메인 페이지로 이동
            }
        } catch (error) {
            setError("아이디 또는 비밀번호가 잘못되었습니다.");
            console.error("로그인 실패:", error);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="mainBox">
                <h2 className="h2T">로그인</h2>
                
                <label className="labelT">아이디</label>
                <input type="text" name="userName" className="input-group" value={formData.userName} onChange={handleChange} required />

                <label className="labelT">비밀번호</label>
                <input type="password" name="password" className="input-group" value={formData.password} onChange={handleChange} required />

                {error && <p className="error-msg">{error}</p>}

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
                <button className="emailbtn btn" onClick={() => window.location.href = '/login/Storeregister'}>
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