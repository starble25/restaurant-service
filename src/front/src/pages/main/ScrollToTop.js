import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // 페이지 이동 시 스크롤을 최상단으로 이동
    }, [pathname]);

    return null; // UI를 렌더링하지 않음
};

export default ScrollToTop;