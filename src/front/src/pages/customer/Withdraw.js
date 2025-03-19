import { useState } from 'react';
import './Withdraw.css';
import verifyPassword from './verifyPassword';
import axios from 'axios';

// 회원 탈퇴
function Withdraw({ id }) {
    const [myInfo, setMyInfo] = useState({ id: id, password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async () => {
        if( !myInfo.id || !myInfo.password || !myInfo.password.trim() ) {
            setErrorMessage('비밀번호를 다시 입력해주세요');
            setMyInfo({ ...myInfo, password: '' });
            return;
        }
        setErrorMessage('');

        if( !(await verifyPassword(myInfo)) ) {
            setErrorMessage('비밀번호를 다시 입력해주세요');
            setMyInfo({ ...myInfo, password: '' });
            return;
        }
        
        console.log('myInfo');
        console.log(myInfo);
        await axios.delete('/api/users/delete-user', { data: myInfo })
        .then(res => {
            console.log("회원 탈퇴 성공:", res.data);
            window.location.href = '/'; //탈퇴 성공시 메인페이지로 이동시킬 예정
        })
        .catch(error => {
            console.log("회원 탈퇴 중 오류 발생:", error.response.data );
            console.log(error);
            setMyInfo({ ...myInfo, password: '' });
        });
    };

    return (
        <div className='withdrawContainer'>
            <h3>회원 탈퇴</h3>
            <div className='inputContainer'>
                <div className='type'>비밀번호</div>
                <div className='inputWrapper'>
                    <input 
                        type='password' 
                        placeholder='현재 비밀번호 입력' 
                        value={myInfo.password || ''}
                        onChange={(e) => setMyInfo({ ...myInfo, password: e.target.value })}
                    />
                    {errorMessage && <div className='errorMessage'>{errorMessage}</div>}
                </div>
            </div>
            <div className='btnWrapper'>
                <button 
                    type='submit' 
                    className='btnStyle btnWithdraw' 
                    onClick={handleSubmit} 
                >회원 탈퇴</button>
            </div>
        </div>
    );
}

export default Withdraw;