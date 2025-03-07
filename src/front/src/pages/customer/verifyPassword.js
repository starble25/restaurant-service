import axios from "axios";

// Backend 비밀번호 검증
/**
 * 비밀번호 검증 비동기 함수
 * 반드시 async - await 사용
 * 
 * @param {*} object - id, password 반드시 포함
 * @returns {boolean} - 검증 결과 (성공: true, 실패: false)
 */
const verifyPassword = async (info) => {
    try {
        const res = await axios.post('api/users/verify-password', info);
        console.log("비밀번호 검증 성공:", res.data);
        return true;
    } catch (error) {
        console.log("비밀번호 검증 실패", error);
        return false;
    }
};

// ex)
//
// const handleSubmit = async () => {
//     if( !(await verifyPassword(modifyInfo) ) ) {
//         return;
//     }
// }

export default verifyPassword;