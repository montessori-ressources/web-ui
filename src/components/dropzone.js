import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './dropzone.css';

var DropZone = () => {
  const [success, setSuccess] = useState(false)
  const [uploadProgress, setUploadProgress] = useState({})
  const [uploading, setUploading] = useState(false)
  const [myFiles, setMyFiles] = useState([])


  const onDrop = useCallback(acceptedFiles => {
    setMyFiles([...myFiles, ...acceptedFiles])
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop
  })

  const renderProgress = (file) => {
    const progress = uploadProgress[file.name];
    if (uploading || success) {
      return (
        <div>{progress ? progress.percentage : 0}</div>

      );
    }
  }

  const files = myFiles.map(file => (
    <div>{file.name} {renderProgress(file)}</div>
  ));

const uploadFiles = async() => {
  setUploading(true)
  setUploadProgress({})
  const promises = [];
  console.log("upload here :D ")
  // myFiles.forEach(file => {
  //   promises.push(sendRequest(file));
  // });
  try {
    await Promise.all(promises);
    setUploading(false)
    setSuccess(true)
  } catch (e) {
    // Not Production ready! Do some error handling here instead...
    setUploading(false)
    setSuccess(true)
  }
}

const renderActions = () => {
if (success) {
  return (
    <button
      onClick={() => {
        setSuccess(!success)
        setMyFiles([])
      }}
    >
      Next
    </button>
  );
} else {
  return (
    <button
      disabled={myFiles.length <= 0 || uploading}
      onClick={uploadFiles}
    >
      Upload
    </button>
  );
}
}

  return (
    <div>
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> : (
              <div>
            <p>Drag 'n' drop some files here, or click to select files</p>
            <p>Select all the pictures for your nomenclature</p>

            </div>
          )
        }
      </div>
      {files}
      {renderActions()}
      <div>

      </div>
    </div>

  )
}

export default DropZone