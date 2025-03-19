import React, { useState, useEffect } from 'react';
import './RegisterPage.css';
import axios from "axios";

function RegisterPage() {
    const [formData, setFormData] = useState({
        userName: '',
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
        userName: '',
        password: '',
        passwordConfirm: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

    useEffect(() => {
        validateForm();
    }, [formData.password, formData.passwordConfirm, formData.agreeTerms, formData.agreeAge, formData.agreePrivacy]);

    const validateForm = () => {
        let valid = true;
        let newErrors = { userName: '', password: '', passwordConfirm: '' };
    
        if (!formData.userName) {
            newErrors.userName = '아이디를 입력하세요.';
            valid = false;
        }
        if (formData.password.length < 8 || formData.password.length > 12) {
            newErrors.password = '비밀번호는 8자리~12자리로 입력해주세요.';
            valid = false;
        }
        if (formData.passwordConfirm.trim() === "" || formData.password !== formData.passwordConfirm) {
            newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
            valid = false;
        }
    
        setErrors(newErrors);
    
        const isAllChecked = formData.agreeTerms && formData.agreeAge && formData.agreePrivacy;
        setIsFormValid(valid && isAllChecked);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => {
            let updatedData = {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            };

            if (name === 'agreeAll') {
                updatedData = {
                    ...updatedData,
                    agreeTerms: checked,
                    agreeAge: checked,
                    agreePrivacy: checked
                };
            }

            updatedData.agreeAll =
                updatedData.agreeTerms && updatedData.agreeAge && updatedData.agreePrivacy;

            return updatedData;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        try {
            const response = await axios.post("/login/register", {
                userName: formData.userName,
                password: formData.password,
                name: formData.name,
                tel: formData.tel,
                userType: "CUS"
                
                
            });
            alert("회원가입 성공!");
             // 로그인 페이지로 이동
            console.log("서버 응답:", response.data);
        } catch (error) {
            console.log("회원가입 실패:", error);
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <div className="mainBox">
                    <h2 className="h2T">개인 회원가입</h2>

                    <label className="labelT">아이디</label>
                    <input type="text" name="userName" className="input-group" value={formData.userName} onChange={handleChange} required />
                    {errors.userName && <p className="error-msg">{errors.userName}</p>}

                    <label className="labelT">비밀번호</label>
                    <input type="password" name="password" className="input-group" value={formData.password} onChange={handleChange} required />
                    {errors.password && <p className="error-msg1">{errors.password}</p>}

                    <label className="labelT">비밀번호 확인</label>
                    <input type="password" name="passwordConfirm" className="input-group" value={formData.passwordConfirm} onChange={handleChange} required />
                    {errors.passwordConfirm && <p className="error-msg1">{errors.passwordConfirm}</p>}

                    <label className="labelT">이름</label>
                    <input type="text" name="name" className="input-group" value={formData.name} onChange={handleChange} required />

                    <label className="labelT">핸드폰 번호</label>
                    <input type="tel" name="tel" className="input-group" value={formData.tel} onChange={handleChange} required />

                    {/* 체크박스 */}
                    <div className="registerAgreeBox">
                        <input type="checkbox" name="agreeAll" checked={formData.agreeAll} onChange={handleChange} />
                        <span
                            className="registerAgreeTT"
                            onClick={() => setIsModalOpen(true)}
                            style={{ cursor: 'pointer', color: 'blue' }}
                        >(필수) 전체약관 동의 (선택항목 포함)</span>
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

                    <button type="submit" className="input-login" onClick={() => window.location.href = '/login' } disabled={!isFormValid}  >
                        회원가입 완료
                    </button>
                </div>
            </form>

            {/* 모달창 */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>이용약관</h3>
                        <p>제 1 조 (목적)
                            이 약관은 레드스푼(이하 "회사")이 제공하는 서비스(이하 "서비스")를 이용함에 있어 회사와 회원 간의 권리, 의무 및 책임 사항을 규정하는 것을 목적으로 합니다.
                        </p><br></br>

                        <p>제 2 조 (정의)
                            "회원"이란 회사의 서비스에 접속하여 이 약관에 동의하고 회원가입을 완료한 자를 의미합니다.
                            "서비스"란 회사가 운영하는 웹사이트 및 모바일 애플리케이션을 통해 제공하는 모든 서비스를 의미합니다.
                        </p><br></br>

                        <p>제 3 조 (이용약관의 효력 및 변경)
                            본 약관은 회원이 동의함으로써 효력이 발생합니다.
                            회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 변경 사항은 회원에게 공지됩니다.
                        </p><br></br>
                        <p>제 4 조 (회원가입 및 정보 관리)
                            회원가입은 실명으로 진행해야 하며, 허위 정보를 입력할 경우 서비스 이용이 제한될 수 있습니다.
                            회원 정보가 변경된 경우, 즉시 수정해야 하며 이를 이행하지 않아 발생하는 불이익에 대한 책임은 회원에게 있습니다.</p><br></br>
                        <p>제 5 조 (서비스 이용)
                            회원은 본 약관을 준수하여야 하며, 서비스 이용 시 다음과 같은 행위를 금지합니다.
                            타인의 개인정보 도용
                            불법적인 정보 게시 및 유포
                            회사 및 타인의 명예를 훼손하는 행위
                            해킹 및 시스템 장애 유발 행위</p><br></br>
                        <p>제 6 조 (개인정보 보호 및 이용)
                            회사는 회원의 개인정보를 보호하기 위해 최선을 다하며, 관련 법률에 따라 개인정보를 처리합니다.
                            개인정보의 수집 및 이용 목적은 다음과 같습니다.
                            서비스 제공 및 운영
                            고객 지원 및 문의 대응
                            맞춤형 서비스 및 광고 제공
                            회사는 회원의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.</p><br></br>
                        <p>제 7 조 (회원 탈퇴 및 서비스 이용 제한)
                            회원은 언제든지 회원 탈퇴를 요청할 수 있으며, 탈퇴 시 회원 정보는 관련 법률에 따라 일정 기간 보관 후 삭제됩니다.
                            회사는 회원이 본 약관을 위반하거나 불법 행위를 한 경우 서비스 이용을 제한할 수 있습니다.
                        </p><br></br>
                        <p>제 8 조 (약관 동의 및 변경 동의)
                            회원은 본 약관을 숙지하고 동의해야 하며, 회사가 약관을 변경할 경우 이를 숙지하고 지속적으로 서비스를 이용하는 것은 변경된 약관에 동의하는 것으로 간주됩니다.

                        </p><br></br>

                        <button onClick={() => setIsModalOpen(false)}>닫기</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RegisterPage;