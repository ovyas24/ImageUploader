import { useState } from 'react';
import ImageUploader from '../Imageuploader/Imageuplaoder';
import Loader from '../Loader/loader';
import ShowImage from '../showImage/showImage';

import './Card.css';

function Card() {
  const [isUploaded, seTisUploaded] = useState(false)
  const [isUploading, setIsUploading] = useState(null)
  
  if(isUploading){
    return (
      <div className="Card loader">
        <Loader />
      </div>
    )
  }

  const handleImageUploa = (file) => {
    setIsUploading(true);
    setTimeout(() => {
      seTisUploaded(true)
      setIsUploading(false)
    }, 3000)
  }

  return (
    <div className="Card">
      { isUploaded ? <ShowImage /> : <ImageUploader onImageUploading={handleImageUploa} /> }
    </div>
  );
}

export default Card;
