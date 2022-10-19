import { useRef, useState } from "react";
import PropTypes from 'prop-types';
import './upload.css';

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 300000;
const DEFAULT_MAX_FILES_COUNT = 8;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const FileUpload = ({
  message,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      let matchExtensionSotnr = file.name.match(/(.sotnr)$/i);
      let matchExtensionZip = file.name.match(/(.zip)$/i);

      if (newFiles.length > 1 && matchExtensionSotnr === null) {
        console.log("sotnr");
        return null;
      } else if (matchExtensionZip === null && matchExtensionSotnr === null) {
        return null;
      }

      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }

    if (newFiles.length > DEFAULT_MAX_FILES_COUNT) {
      return null;
    }

    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);

      if (updatedFiles === null) {
        setErrorMessage("invalid input");
      } else {
        setFiles(updatedFiles);
        callUpdateFilesCb(updatedFiles);
      }
    }
  };

  return (
    <>
      <section className="upload-container">
        <p className="upload-error">{errorMessage}</p>
        <p className="upload-text">Drag and drop files anywhere or</p>
        <button className="upload-button" type="button" onClick={handleUploadBtnClick}>
          <span>Select {otherProps.multiple ? "files" : "a file"}</span>
        </button>
        <input
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          multiple={otherProps.multiple}
          accept={otherProps.accept}
          title=""
          value=""
          className="upload"
          {...otherProps}
        />
        <p className="upload-text">{message}</p>
      </section>
    </>
  );
};

FileUpload.propTypes = {
  message: PropTypes.string,
  updateFilesCb: PropTypes.func,
  maxFileSizeInBytes: PropTypes.number
}

export default FileUpload;