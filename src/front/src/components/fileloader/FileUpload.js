import { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

const FileUpload = ( {fileCount, boxText} ) => {
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const maxFiles = fileCount ? fileCount : 3; // 최대 업로드 파일 수(기본 1)
    const labalName = boxText ? boxText : '이미지 선택'; // 이미 선택상자 텍스트
    const maxFileSize = 3 * 1024 * 1024; // 최대 파일 크기 (3MB)

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
            //이미지 파일 미리보기 설정

            // const reader = new FileReader();
            // reader.onloadend = () => {
            //     setPreviews((prevPreviews) => [...prevPreviews, reader.result]);
            // };
            // reader.readAsDataURL(file);
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

        try {
            const response = await axios.post('YOUR_UPLOAD_URL', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('파일 업로드 성공' + response.data);
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
                <label htmlFor='fileInput' className='custom-file-upload'>
                    <div className='formContainer'>
                        <div className='fileUpload'>
                            {labalName}
                        </div>

                        <div className='fileNames'>
                        {
                            files.map((file, index) => (
                                <span key={index}>{file.name}{index < files.length - 1 ? ', ' : ''}</span>
                            ))
                        }
                        </div>
                    </div>
                </label>
            </div>
            <div className='buttonWrapper'>
                <button onClick={handleFileUpload}>업로드</button>
            </div>
        </div>
    );
};

export default FileUpload;
