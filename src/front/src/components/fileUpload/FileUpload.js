import { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

/**
 * 이미지 파일 업로드 컴포넌트
 * @param {string} uploadUrl - [필수!] 해당 url 경로로 post 요청 보냅니다
 * @param {int} id - [필수!] 참조 pk값
 * @param {number} maxFileCount - 업로드할 파일의 최대 개수 (기본값: 1)
 * @param {string} selectText - 파일 선택 버튼에 표시할 텍스트 (기본값: 'FILE UPLOAD')
 * @param {string} submitText - 파일 업로드 버튼에 표시할 텍스트 (기본값: '업로드')
 * @param {function} uploadSuccess - 업로드 성공 시 호출되는 콜백 함수(업로드 성공한 파일url 배열 전달)
 * @returns {JSX.Element} 파일 업로드 컴포넌트를 렌더링. 상위 태그의 크기에 맞게 크기가 조절됩니다
 */
const FileUpload = ({ uploadUrl, maxFileCount, selectText, submitText, id, uploadSuccess }) => {
    const [files, setFiles] = useState([]);
    const maxFiles = maxFileCount ? maxFileCount : 1; // 최대 업로드 파일 수(기본 1)
    const uploadButtonName = selectText ? selectText : 'FILE UPLOAD'; // 이미 선택상자 텍스트
    const submitButtonName = submitText ? submitText : 'SUBMIT'; // 이미 선택상자 텍스트
    const maxFileSize = 3 * 1024 * 1024; // 최대 파일 크기 (3MB)
    const [showFileNames, setShowFileNames] = useState('');

    const handleFileChange = (item) => {
        const selectedFiles = Array.from(item.target.files);

        if (selectedFiles.length + files.length > maxFiles) {
            alert(`최대 ${maxFiles}개의 파일만 업로드할 수 있습니다.`);
            return;
        }

        selectedFiles.map((file) => {
            if (file.size > maxFileSize) {
                alert(`파일 크기는 최대 ${maxFileSize / (1024 * 1024)}MB까지 업로드할 수 있습니다.`);
                return;
            }

            if (!file.type.startsWith('image/')) {
                alert('이미지 파일만 업로드 가능합니다.');
                return;
            }

            setFiles((prevFiles) => [...prevFiles, file]);
            setShowFileNames((prevNames) => {
                return prevNames ? `${prevNames}, ${file.name}` : file.name;
            });
        });
    };

    const handleFileUpload = async () => {
        if (files.length === 0) {
            alert('파일을 선택해주세요.');
            return;
        }

        const formData = new FormData();
        files.forEach((file) => {
            formData.append('files', file);
        });
        formData.append('id', id);

        try {
            const response = await axios.post(uploadUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('파일 업로드 성공 : ' + response.data);

            // 업로드 성공 시 이미지 URL 받아오기
            const uploadedImagePath = response.data; // 서버에서 반환하는 이미지 경로
            console.log('파일 업로드 성공, 이미지 URL:', uploadedImagePath);

            // 상위 컴포넌트로 전달
            if (uploadSuccess) {
                uploadSuccess(uploadedImagePath);
            }

            // 성공 후 초기화
            setFiles([]);
            setShowFileNames('');
        } catch (error) {
            console.error('파일 업로드 오류:', error);
        }
    };

    return (
        <div className='fileUploadContainer'>
            <input 
                id='fileInput' 
                type='file' multiple 
                onChange={handleFileChange} 
                style={{display:'none'}} 
            />

            <div className='formWrapper'>
                <label htmlFor='fileInput' className='customfileInput'>
                    <div className='formContainer'>
                        <div className='fileUpload'>
                            {uploadButtonName}
                        </div>
                        <div className='fileNames'>
                            <span>{showFileNames}</span>
                        </div>
                    </div>
                </label>
            </div>
            <div className='buttonWrapper'>
                <button className='uploadButton' onClick={handleFileUpload}>{submitButtonName}</button>
            </div>
        </div>
    );
};

export default FileUpload;
