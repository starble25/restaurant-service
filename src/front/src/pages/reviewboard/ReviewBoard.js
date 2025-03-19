import React from 'react';
import './ReviewBoard.css';

const ReviewBoard = () => {
    return (
        <div className="review-board">
            <h1>공지사항</h1>
            <table>
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>카드결제방지 서비스 제공 안내</td>
                        <td>2025.03.13</td>
                    </tr>
                    <tr>
                        <td>선불충전 보조지 안내</td>
                        <td>2025.03.11</td>
                    </tr>
                    <tr>
                        <td>대출심사 애트 딩함 안내</td>
                        <td>2025.02.28</td>
                    </tr>
                    <tr>
                        <td>모스프라임 혜택 안내</td>
                        <td>2025.02.27</td>
                    </tr>
                    <tr>
                        <td>위치기반서비스 이용약관 변경 안내</td>
                        <td>2025.02.25</td>
                    </tr>
                    <tr>
                        <td>토스증권 사옥 점검으로 인한 토스증권 웹 사용 중단 안내</td>
                        <td>2025.02.21</td>
                    </tr>
                    <tr>
                        <td>토스증권 생년 월일 변경 안내</td>
                        <td>2025.02.20</td>
                    </tr>
                    <tr>
                        <td>토스증권 사옥 점검으로 인한 토스증권 앱 버그 해결 안내</td>
                        <td>2025.02.18</td>
                    </tr>
                    <tr>
                        <td>서비스 이용약관 개정 안내</td>
                        <td>2025.02.12</td>
                    </tr>
                    <tr>
                        <td>대출심사 애트 딩함 안내</td>
                        <td>2025.02.03</td>
                    </tr>
                </tbody>
            </table>
            <div className="pagination">
                <span>«</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>...</span>
                <span>30</span>
                <span>»</span>
            </div>
        </div>
    );
};

export default ReviewBoard;
