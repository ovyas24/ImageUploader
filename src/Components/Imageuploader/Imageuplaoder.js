import "./imageUploader.css"
import Button from '@material-ui/core/Button';

const ImageUploader = ({ onImageUploading }) => {

    function handleDrop(e){
        e.preventDefault();
        console.log("drop")
        const files = e.dataTransfer.files;
        console.log(files);
        onImageUploading(files[0]);
        e.stopPropagation();
    }

    function handleDragOver(e){
        e.preventDefault();
        console.log("over")
        e.stopPropagation();
    }

    function handleDragEnter(e) {
        e.preventDefault();
        console.log("enter")
        e.stopPropagation();
    }

    function handleDragLeave(e){
        e.preventDefault();
        console.log("leave")
        e.stopPropagation();
    }

    return (
        <div>
            <h4 className="upload-image">Upload your Image</h4>
            <p className="para">File should be Jepg, Png,...</p>
            <div className="dragDropDiv" 
                onDrop={e => handleDrop(e)}
                onDragOver={e => handleDragOver(e)}
                onDragEnter={e => handleDragEnter(e)}
                onDragLeave={e => handleDragLeave(e)}
            >
                <div className="mountains"> </div> 
                <p className="dragDroptext">Drag & Drop image here</p>
            </div>
            <p className="para or">Or</p>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="contained-button-file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span">
                    Choose a file
                </Button>
            </label>
        </div>
    )
}

export default ImageUploader;