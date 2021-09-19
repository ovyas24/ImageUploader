import axios from 'axios';
import React, { useState } from 'react';
import ImageUploader from '../Imageuploader/Imageuplaoder';
import Loader from '../Loader/loader';
import ShowImage from '../showImage/showImage';
import './Card.css';

function Card() {
  const [isUploaded, seTisUploaded] = useState(false)
  const [isUploading, setIsUploading] = useState(null)
  const [link, setLink] = useState(null)

  if(isUploading){
    return (
      <div className="Card">
        <Loader />
      </div>
    )
  }

  const handleImageUploa = async (file) => {
    setIsUploading(true);
    const data = new FormData();
    data.append('file', file);
    const config = {
      method: 'post',
      url: 'http://localhost:5000/upload',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    }
    const res = await axios(config)
                          .then((response) => response.data)
                          .catch((err) => console.log(err.message))
    if(res && res.fileUploaded) {
      seTisUploaded(true)
      setIsUploading(false)
    }
    const path = "http://localhost:5000"+ res.link;
    setLink(path)
  }

  return (
    <div className="Card">
      { isUploaded ? <ShowImage link={link} /> : <ImageUploader onImageUploading={handleImageUploa} /> }
    </div>
  );
}

export default Card;
