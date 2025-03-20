import React, { useState, useEffect } from "react";
import { fetchBoardList, fetchBoardDetail, saveBoard, deleteBoard } from "../../api/boardApi";
import "./Board.css";



function BoardList({ setCurrentPage, setSelectedBoardId, boardList }) {
    return (
        <div className="board-container">
            <h2>독자 게시판</h2>
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
                        boardList.map((board) => (
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
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">등록된 게시글이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="write-btn-container">
                <button className="write-btn" onClick={() => setCurrentPage("write")}>글 작성하기</button>
            </div>
        </div>
    );
}

function BoardDetail({ setCurrentPage, boardId, refreshBoardList }) {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        if (boardId) {
            fetchBoardDetail(boardId)
                .then(setBoard)
                .catch((error) => console.error("상세 조회 실패:", error));
        }
    }, [boardId]);

    if (!board) return <p>게시글 데이터를 불러오는 중...</p>;

    return (
        <div className="board-detail-container">

        <div className="board-detail-header">게시판</div>

            <div className="board-meta">
                <h2>{board.title}</h2>
                <div className="board-meta-content">
                    <div>
                        <div>
                            작성자: {board.writer}
                        </div>
                        <span>작성일: {board.regDate}</span>
                    </div>

                </div>
            </div>
            <div className="board-content">{board.content}</div>
            <div className="board-actions">
                <button onClick={() => setCurrentPage("list")}>목록으로</button>
                <button onClick={() => setCurrentPage("edit")}>수정</button>
                <button onClick={async () => {
                    if (window.confirm("삭제하시겠습니까?")) {
                        const success = await deleteBoard(boardId);
                        if (success) {
                            refreshBoardList();
                            setCurrentPage("list");
                        } else {
                            alert("게시글 삭제에 실패했습니다.");
                        }
                    }
                }}>삭제</button>
            </div>
        </div>
    );
}


function Board() {
    const [currentPage, setCurrentPage] = useState("list");
    const [selectedBoardId, setSelectedBoardId] = useState(null);
    const [boardList, setBoardList] = useState([]);
    const [board, setBoard] = useState({ title: "", writer: "", content: "" });

    const refreshBoardList = async () => {
        try {
            const data = await fetchBoardList();
            setBoardList(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("게시판 목록 불러오기 실패:", error);
            setBoardList([]);
        }
    };

    useEffect(() => {
        refreshBoardList();
    }, []);

    const handleChange = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const savedBoard = await saveBoard(board);
            if (savedBoard) {
                await refreshBoardList();
                setCurrentPage("list");
                setBoard({ title: "", writer: "", content: "" }); // 폼 초기화
            } else {
                alert("게시글 저장에 실패했습니다.");
            }
        } catch (error) {
            console.error("게시글 저장 중 오류 발생:", error);
            alert("게시글 저장에 실패했습니다.");
        }
    };

    useEffect(() => {
        if (currentPage === "edit" && selectedBoardId) {
            fetchBoardDetail(selectedBoardId).then(setBoard);
        }
    }, [currentPage, selectedBoardId]);

    return (
        <div>
            {currentPage === "list" && (
                <BoardList
                    setCurrentPage={setCurrentPage}
                    setSelectedBoardId={setSelectedBoardId}
                    boardList={boardList}
                />
            )}
            {currentPage === "detail" && (
                <BoardDetail
                    setCurrentPage={setCurrentPage}
                    boardId={selectedBoardId}
                    refreshBoardList={refreshBoardList}
                />
            )}
            {currentPage === "write" && (
                <div className="board-container">
                    <h2>게시글 작성</h2>
                    <form onSubmit={handleSubmit}>
                        <p>
                            제목: <input type="text" name="title" value={board.title} onChange={handleChange} required />
                        </p>
                        <p>
                            작성자: <input type="text" name="writer" value={board.writer} onChange={handleChange} required />
                        </p>
                        <p>
                            내용: <textarea name="content" rows="5" value={board.content} onChange={handleChange} required />
                        </p>
                        <div className="button-container">
                            <button type="submit">저장</button>
                            <button type="button" onClick={() => setCurrentPage("list")}>취소</button>
                        </div>
                    </form>
                </div>
            )}
            {currentPage === "edit" && (
                <div className="board-container">
                    <h2>게시글 수정</h2>
                    <form onSubmit={handleSubmit}>
                        <p>
                            제목: <input type="text" name="title" value={board.title} onChange={handleChange} required />
                        </p>
                        <p>
                            작성자: <input type="text" name="writer" value={board.writer} onChange={handleChange} required />
                        </p>
                        <p>
                            내용: <textarea name="content" rows="5" value={board.content} onChange={handleChange} required />
                        </p>
                        <button type="submit">수정</button>
                        <button type="button" onClick={() => setCurrentPage("list")}>취소</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Board;
