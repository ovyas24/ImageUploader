import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./showImage.css"
function ShowImage({link}) {
    const [copied, setCopied] = useState(false)
    const handleCopy = (e) =>{
        e.preventDefault();
        navigator.clipboard.writeText(link);
        setCopied(true)
        setTimeout(()=>{
            setCopied(false)
        }, 2000)
    }

    return (
        <div>
            <CheckCircleIcon className="bg-green" fontSize="large" />
            <h2 className="para">Uploaded Successfully!</h2>
            <img src={link} /> 
            <div className="link">
                <p>{link}</p>
                <button onClick={handleCopy}>Copy Link</button>
            </div>
            { copied ? <p className="success">Copied!</p> : null }
        </div>
    )
}

export default ShowImage
