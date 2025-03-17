import './Activity.css';

function Activity({ children }) {
    return (
        <div className='activityContainer'>
            {children}
        </div>
    )
}

// props로 받기
const ActContainer = ({ title, text }) => {
    return (
        <div className="activity">
            <div>{title}</div>
            <div className="status">{text}</div>
        </div>
    )
}

// childrend으로 받기
const ActivityBox = ({ children }) => {
    return (
        <div className="activity">
            {children}
        </div>
    );
};

const ActivityTitle = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

const ActivityContent = ({ children }) => {
    return (
        <div className="status">{children}</div>
    )
}

export { Activity, ActivityBox, ActivityTitle, ActivityContent, ActContainer };