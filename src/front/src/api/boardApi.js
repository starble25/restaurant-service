// 게시판 목록 조회
export async function fetchBoardList() {
    try {
        const response = await fetch("/api/board/board");
        if (!response.ok) {
            throw new Error("게시판 목록을 가져오는 데 실패했습니다.");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching board list:", error);
        return [];
    }
}

// 게시글 상세 조회
export async function fetchBoardDetail(boardId) {
    try {
        const response = await fetch(`/api/board/board/${boardId}`);
        if (!response.ok) {
            throw new Error("게시글 정보를 가져오는 데 실패했습니다.");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching board detail:", error);
        return null;
    }
}

// 게시글 저장 (새 글 작성 및 수정)
export async function saveBoard(board) {
    try {
        const method = board.id ? "PUT" : "POST";
        const url = board.id ? `/api/board/board/edit/${board.id}` : "/api/board/board/write"; // 경로 수정
        
        // 서버로 전송하는 board 객체 로그 추가
        console.log("Sending board data:", board);
        
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(board),
        });

        if (!response.ok) {
            throw new Error("게시글 저장에 실패했습니다.");
        }

        return await response.json();
    } catch (error) {
        console.error("Error saving board:", error);
        return null;
    }
}

// 게시글 삭제
export async function deleteBoard(boardId) {
    try {
        const response = await fetch(`/api/board/board/delete/${boardId}`, {  // 경로 수정
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("게시글 삭제에 실패했습니다.");
        }

        return true;
    } catch (error) {
        console.error("Error deleting board:", error);
        return false;
    }
}
