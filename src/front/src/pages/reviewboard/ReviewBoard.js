import React, { useState, useEffect } from "react";
import { 
    fetchReviewBoardList, 
    fetchReviewBoardDetail, 
    saveReviewBoard, 
    deleteReviewBoard 
} from "../../api/reviewBoardApi";
import "./ReviewBoard.css";

function ReviewBoardList({ setCurrentPage, setSelectedBoardId, boardList }) {
    if (!boardList || !Array.isArray(boardList)) {
        return <p>리뷰 게시판 데이터를 불러오는 중...</p>;
    }

    return (
        <div className="board-container">
            <h2>리뷰 게시판</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.length > 0 ? (
                        boardList.map((board) =>
                            board ? (
                                <tr key={board.id}>
                                    <td>{board.id}</td>
                                    <td>
                                        <a
                                            href="#!"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedBoardId(board.id);
                                                setCurrentPage("detail");
                                            }}
                                        >
                                            {board.title}
                                        </a>
                                    </td>
                                    <td>{board.writer}</td>
                                    <td>{board.regDate}</td>
                                </tr>
                            ) : null
                        )
                    ) : (
                        <tr>
                            <td colSpan="4">등록된 게시글이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => setCurrentPage("write")}>글 작성하기</button>
        </div>
    );
}

function ReviewBoardDetail({ setCurrentPage, boardId, refreshBoardList }) {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        if (boardId) {
            fetchReviewBoardDetail(boardId)
                .then((data) => setBoard(data))
                .catch((error) => console.error("상세 조회 실패:", error));
        }
    }, [boardId]);

    if (!board) return <p>게시글 데이터를 불러오는 중...</p>;

    const handleDelete = async () => {
        if (window.confirm("삭제하시겠습니까?")) {
            const success = await deleteReviewBoard(boardId);
            if (success) {
                refreshBoardList();
                setCurrentPage("list");
            } else {
                alert("게시글 삭제에 실패했습니다.");
            }
        }
    };

    return (
        <div className="board-container">
            <h2>{board.title}</h2>
            <p>작성자: {board.writer}</p>
            <p>작성일: {board.regDate}</p>
            <hr />
            <p>{board.content}</p>
            <hr />
            <button onClick={() => setCurrentPage("list")}>목록으로</button>
            <button onClick={() => setCurrentPage("edit")}>수정</button>
            <button onClick={handleDelete}>삭제</button>
        </div>
    );
}

export default ReviewBoardList;
