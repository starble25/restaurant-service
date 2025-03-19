import './CustomBtn.css';

/**
 * 
 * @param {string} label - 버튼에 표시될 텍스트
 * @param {function} onClick - 버튼 클릭 시 콜백함수
 * @param {string} color - 버튼 배경색 (기본값: '#1351a1')
 * @param {string} hover - 마우스가 올라갔을 때의 배경색 (기본값: '#4b8fe9')
 * @param {string} active - 버튼을 클릭했을 때의 배경색 (기본값: '#064180')
 * @param {string} textColor - 버튼 텍스트의 색상 (기본값: white)
 * 
 * @returns {JSX.Element} - 스타일과 이벤트가 적용된 버튼 컴포넌트
 */
function CustomBtn({ children, label, onClick, color, hover, active, textColor }) {
    let applyColor = color ? color : '#1351a1';
    let applyHover = hover ? hover : '#4b8fe9';
    let applyActive = active ? active : '#064180';
    let applyTextColor = textColor ? textColor : '#ffffff';

    return (
        <button 
            className='customButton'
            type='button'
            onClick={onClick} 
            style={{
                '--color': applyColor,
                '--hover': applyHover,
                '--active': applyActive,
                '--text-color': applyTextColor
            }}
        >
            {label}{children}
        </button>
    );
}

export default CustomBtn;
