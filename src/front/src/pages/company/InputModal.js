import React from 'react';
import './InputModal.css';
import { useState } from 'react';
import CustomBtn from '../../components/common/CustomBtn';

function InputModal({ closeModal, initValue = {}, children, submit, action }) {
    const [formData, setFormData] = useState(initValue); // 초기값 반영

    const handleChange = (e, name) => {
        setFormData({ ...formData, [name]: e.target.value });
    };

    const handleSubmit = () => {
        submit(formData);
        action(formData);
        // closeModal();
    };

    return (
        <div className='modalBackground'>
            <div className='inputModalContainer'>
                <button className='closeModalButton' onClick={closeModal}>&times;</button>
                {React.Children.map(children, (child) =>
                    child.type === Content
                        ? React.cloneElement(child, { onChange: handleChange, formData })
                        : child
                )}
                <div className='submitButtonWrap'>
                    <CustomBtn className='submitButton' onClick={handleSubmit}>수정하기</CustomBtn>
                </div>
            </div>
        </div>
    );
}

function Title({ children }) {
    return (
        <div className='titleWrap'>
            <p className='modalTitle'>{children}</p>
            <hr/>
        </div>
    );
}

function Content({ children, onChange, formData }) {
    return (
        <div className='inputWrap'>
            {React.Children.map(children, (child) =>
                child.type === Input ? React.cloneElement(child, { onChange, value: formData[child.props.name] || '' }) : child
            )}
        </div>
    );
}

function Input({ name, children, onChange, value }) {
    return (
        <div className='inputContainer'>
            <div className='inputTitle'>{children}</div>
            <input type='text' className='inputContent' value={value} onChange={(e) => onChange(e, name)} />
        </div>
    );
}

export { InputModal, Title, Content, Input };
