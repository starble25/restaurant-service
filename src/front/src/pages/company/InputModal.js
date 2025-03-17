import React from 'react';
import './InputModal.css';
import { useState } from 'react';
import CustomBtn from '../../components/common/CustomBtn';

function InputModal({ closeModal, children, submit }) {
    const [formData, setFormData] = useState({});

    const handleChange = (e, name) => {
        setFormData({ ...formData, [name]: e.target.value });
    };

    const handleSubmit = () => {
        submit(formData);
        closeModal();
    };

    return (
        <div className='inputModalContainer'>
            <button className='closeModalButton' onClick={closeModal}>&times;</button>
            {React.Children.map(children, child =>
                child.type === Content
                    ? React.cloneElement(child, { onChange: handleChange })
                    : child
            )}
            {/* <button className='submitButton' onClick={handleSubmit}>수정하기</button> */}
            <div className='submitButtonWrap'>
                <CustomBtn className='submitButton' onClick={handleSubmit}>수정하기</CustomBtn>
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

function Content({ children, onChange }) {
    return (
        <div className='inputWrap'>
            {React.Children.map(children, child =>
                child.type === Input ? React.cloneElement(child, { onChange }) : child
            )}
        </div>
    );
}

function Input({ name, children, onChange }) {
    return (
        <div className='inputContainer'>
            <div className='inputTitle'>{children}</div>
            <input type='text' className='inputContent' onChange={(e) => onChange(e, name)} />
        </div>
    );
}

export { InputModal, Title, Content, Input };
