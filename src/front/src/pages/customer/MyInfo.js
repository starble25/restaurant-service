import axios from "axios";
import { useState, useEffect } from "react";
import "./MyInfo.css";
import verifyPassword from "./verifyPassword";

// 내 정보
function MyInfo({ id, myInfo, setMyInfo, profileImagePath }) {
    const [isEditing, setIsEditing] = useState(true);

    useEffect(() => {
        if( myInfo ) { // myInfo가 있으면 실행안함
            return;
        }

        axios.post('api/users/find-user', { id })
            .then( res => {
                const data = res.data;
                setMyInfo({ ...data, password: null }); // password는 null로 세팅
            })
            .catch( error => console.error(error) )
    }, [id, myInfo]);

    return (
        myInfo ? 

        isEditing ? 

        <div className='myInfo'>
            <div className='imgContainer'>
                <img src={profileImagePath} alt='profileImage' />
                <button>이미지 등록</button>
            </div>
            <div className='itemContainer'>
                <div className='item'>
                    <div className='type'>아이디</div>
                    <div>{myInfo.userName}</div>
                </div>
                <div className='item'>
                    <div className='type'>이름</div>
                    <div>{myInfo.name}</div>
                </div>
                <div className='item'>
                    <div className='type'>이메일</div>
                    <div>{myInfo.email}</div>
                </div>
                <div className='item'>
                    <div className='type'>전화번호</div>
                    <div>{myInfo.tel}</div>
                </div>
                <button onClick={() => setIsEditing(false)}>내정보 변경</button>
            </div>
        </div>

        : <ModifyMyInfo myInfo={myInfo} setMyInfo={setMyInfo} setIsEditing={setIsEditing}/>
        
        : <div> No data </div> // myInfo == null
    );
}

// 내정보 변경
function ModifyMyInfo({ myInfo, setMyInfo, setIsEditing }) {
    const [modifyInfo, setModifyInfo] = useState(myInfo);

    const handleSubmit = async () => {
        if( !validateForm(modifyInfo) ) {
            return;
        }
        
        // const verify = await verifyPassword(modifyInfo);
        // if( !verify ) {
        //     console.log('verify : ' + verifyPassword(modifyInfo));
        //     return;
        // }

        if( !(await verifyPassword(modifyInfo) ) ) {
            return;
        }

        if( !modifyInfo.newPassword ) {
            setModifyInfo({ ...modifyInfo, password: modifyInfo.newPassword });
        }
        //모든 검증 완료

        axios.put('api/users/modify-user', modifyInfo)
            .then( res => {
                console.log("정보 업데이트 성공:", res.data);
                window.location.reload();
            })
            .catch( error => {
                console.log("업데이트 중 오류 발생:", error);
                setModifyInfo({ ...modifyInfo, password: '' });
            });
    };

    //Backend 비밀번호 검증
    // const verifyPassword = async (modifyInfo) => {
    //     try {
    //         const res = await axios.post('api/users/verify-password', modifyInfo);
    //         console.log("비밀번호 검증 성공:", res.data);
    //         return true;
    //     } catch (error) {
    //         console.log("비밀번호 검증 실패", error);
    //         return false;
    //     }
    // };
    

    // 입력 검증
    const validateForm = (modifyInfo) => {
        const { name, email, tel, password, newPassword, confirmPassword } = modifyInfo;

        // 현재 비밀번호 검증
        if (!password || !password.trim()) {
            alert("현재 비밀번호를 입력하세요.");
            return false;
        }
    
        // 이름 검증
        if (!name.trim()) {
            alert("이름을 입력하세요.");
            return false;
        }
    
        // 이메일 검증
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("올바른 이메일 형식을 입력하세요.");
            return false;
        }
    
        // 연락처 검증
        const telRegex = /^\d{3}-\d{3,4}-\d{4}$/; // 하이픈 포함
        if (!telRegex.test(tel)) {
            alert("올바른 연락처 형식을 입력하세요. 예) 010-1234-5678");
            return false;
        }
    
        // 새 비밀번호 검증
        if (newPassword || confirmPassword) {
            if (newPassword.length < 8) {
                alert("비밀번호는 최소 8자 이상이어야 합니다.");
                return false;
            }
            if (newPassword !== confirmPassword) {
                alert("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
                return false;
            }
        }
    
        return true;
    };


    return (
        <div className='modifyContainer'>
            <div className='$title'>
                <h3>내정보 변경</h3>
            </div>
            <div className='modify modifyPw'>
                <div className='type'>비밀번호</div>
                <div className='inputText'>
                    <input 
                        type='password' 
                        placeholder='현재 비밀번호 입력' 
                        value={modifyInfo.password || ''} 
                        onChange={(e) => setModifyInfo({ ...modifyInfo, password: e.target.value })}
                    />
                    <br/>
                    <input 
                        type='password' 
                        placeholder='새 비밀번호 입력' 
                        onChange={(e) => setModifyInfo({ ...modifyInfo, newPassword: e.target.value })}
                    />
                    <br/>
                    <input 
                        type='password' 
                        placeholder='새 비밀번호 확인' 
                        onChange={(e) => setModifyInfo({ ...modifyInfo, confirmPassword: e.target.value })}
                    />
                </div>
            </div>
            <div className='modify'>
                <div className='type'>이름</div>
                <div className='inputText'>
                    <input 
                        type='text' 
                        value={modifyInfo.name} 
                        onChange={(e) => setModifyInfo({ ...modifyInfo, name: e.target.value })}
                    />
                </div>
            </div>
            <div className='modify'>
                <div className='type'>이메일</div>
                <div className='inputText'>
                    <input 
                        type='email' 
                        placeholder='이메일 입력  ex) hong@example.com' 
                        value={modifyInfo.email}
                        onChange={(e) => setModifyInfo({...modifyInfo, email: e.target.value})}
                    />
                </div>
            </div>
            <div className='modify'>
                <div className='type'>연락처</div>
                <div className='inputText'>
                <input
                    type="text"
                    placeholder='숫자만 입력하세요  ex) 010-1234-5678'
                    value={modifyInfo.tel}
                    onInput={(e) => {
                        let value = e.target.value.replace(/[^0-9]/g, ''); // 숫자만 허용
                        if (value.length > 3 && value.length <= 7) {
                            value = value.replace(/^(\d{3})(\d+)/, '$1-$2'); // 중간에 하이픈 삽입
                        } else if (value.length > 7) {
                            value = value.replace(/^(\d{3})(\d{4})(\d+)/, '$1-$2-$3'); // 마지막 하이픈 삽입
                        }
                        e.target.value = value; // 변환된 값을 입력 필드에 반영
                        setModifyInfo({...modifyInfo, tel: value});
                    }}
                    maxLength="13" // 최대 입력길이
                />
                </div>
            </div>
            <button type='submit' className='btnSubmit' onClick={handleSubmit}>회원정보 수정</button>
        </div>
    )
}

export default MyInfo;