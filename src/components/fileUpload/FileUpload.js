import React, {useState} from 'react';
import axios from 'axios';

function FileUpload() {

    const [file, setFile] = useState(false);

    function handleFileSelect(e){
        const upLoadedFile = e.target.files[0];
        console.log(upLoadedFile);
        setFile(upLoadedFile);
    }

    async function upLoadFile(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", file);

        try {
            const result = await axios.post("http://localhost:8080/files", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
            console.log(result.data);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="image-container">
            <form onSubmit={upLoadFile}
                  className="upload-form"
            >
                <label htmlFor= "select-file">
                    <input type="file" id="select-file" onChange={handleFileSelect}/>
                </label>
                <label htmlFor="save-file">
                    <input type="submit" id="save-file" value="Upload File" onSubmit={upLoadFile}/>
                </label>


            </form>
        </div>

    )
}

export default FileUpload;