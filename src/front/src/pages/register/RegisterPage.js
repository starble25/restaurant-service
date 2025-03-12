import React, { useState, useEffect } from 'react';
import './RegisterPage.css';
import axios from "axios";

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
        name: '',
        tel: '',
        agreeAll: false,
        agreeTerms: false,
        agreeAge: false,
        agreePrivacy: false,
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
        passwordConfirm: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);

    // 폼 유효성 검사
    const validateForm = () => {
        let valid = true;
        let newErrors = { username: '', password: '', passwordConfirm: '' };

        if (!formData.username) {
            newErrors.username = '아이디를 입력하세요.';
            valid = false;
        }
        if (formData.password.length < 8 || formData.password.length > 12) {
            newErrors.password = '비밀번호는 8자리~12자리로 입력해주세요.';
            valid = false;
        }
        if (formData.password !== formData.passwordConfirm) {
            newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
            valid = false;
        }

        setErrors(newErrors);

        // 필수 체크박스 3개가 모두 체크되었는지 확인
        const isAllChecked = formData.agreeTerms && formData.agreeAge && formData.agreePrivacy;

        setIsFormValid(valid && isAllChecked);
    };

    // 체크박스 및 입력값 변경 처리
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => {
            if (name === 'agreeAll') {
                // "전체 동의" 체크 시 모든 필수 항목을 같이 체크
                return {
                    ...prevData,
                    agreeAll: checked,
                    agreeTerms: checked,
                    agreeAge: checked,
                    agreePrivacy: checked
                };
            } else {
                // 개별 체크 시, 전체 동의 체크 상태를 동적으로 변경
                const updatedData = {
                    ...prevData,
                    [name]: type === 'checkbox' ? checked : value
                };

                updatedData.agreeAll =
                    updatedData.agreeTerms && updatedData.agreeAge && updatedData.agreePrivacy;

                return updatedData;
            }
        });
    };

    // formData가 변경될 때마다 유효성 검사 실행
    useEffect(() => {
        validateForm();
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) return;
    
        try {
            const response = await axios.post("/login/register", {
                username: formData.username,
                password: formData.password,
                name: formData.name,
                tel: formData.tel,
            });
    
            alert("회원가입 성공!");
            console.log("서버 응답:", response.data);
        } catch (error) {
            console.log("회원가입 실패:", error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mainBox">
                    <h2 className="h2T">회원가입</h2>

                    <label className="labelT">아이디</label>
                    <input type="text" name="username" className="input-group" value={formData.username} onChange={handleChange} required />
                    {errors.username && <p className="error-msg">{errors.username}</p>}

                    <label className="labelT">비밀번호</label>
                    <input type="password" name="password" className="input-group" value={formData.password} onChange={handleChange} required />
                    {errors.password && <p className="error-msg1">{errors.password}</p>}

                    <label className="labelT">비밀번호 확인</label>
                    <input type="password" name="passwordConfirm" className="input-group" value={formData.passwordConfirm} onChange={handleChange} required />
                    {errors.passwordConfirm && <p className="error-message">{errors.passwordConfirm}</p>}

                    <label className="labelT">이름</label>
                    <input type="text" name="name" className="input-group" value={formData.name} onChange={handleChange} required />

                    <label className="labelT">핸드폰 번호</label>
                    <input type="tel" name="tel" className="input-group" value={formData.tel} onChange={handleChange} required />

                    {/* 체크박스 */}
                    <div className="registerAgreeBox">
                        <input type="checkbox" name="agreeAll" checked={formData.agreeAll} onChange={handleChange} />
                        <strong>약관 전체동의</strong> <span className="registerAgreeTT">(선택항목 포함)</span>
                    </div>

                    <div className="registerAgreeBox">
                        <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
                        <div className="registerAgreeT1">(필수) 이용약관 동의</div>
                    </div>

                    <div className="registerAgreeBox">
                        <input type="checkbox" name="agreeAge" checked={formData.agreeAge} onChange={handleChange} />
                        <div className="registerAgreeT1">(필수) 만 14세 이상 확인</div>
                    </div>

                    <div className="registerAgreeBox">
                        <input type="checkbox" name="agreePrivacy" checked={formData.agreePrivacy} onChange={handleChange} />
                        <div className="registerAgreeT1">(필수) 개인정보 수집 및 이용 동의</div>
                    </div>

                    <button type="submit" className="input-login" disabled={!isFormValid}>
                        회원가입 완료
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;