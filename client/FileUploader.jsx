import React, { useState } from 'react';

const FileUploader = () => {
    const hiddenFileInput = React.useRef(null);
    const [img, setImg] = useState("https://robohash.org/asdasd")

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        setImg(`${URL.createObjectURL(fileUploaded)}`)

    };
    return (
        <>
            <img
                className='competition_forminspirations_ins'
                onClick={handleClick}
                src={`${img}`} />

            <input type="file"
                accept="image/png, image/jpeg"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </>
    );
};
export default FileUploader;