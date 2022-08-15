import axios from 'axios';
import React, { useState } from 'react';
import { Container } from 'reactstrap';

const FileHandling = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState();

  const files = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('file', selectedFile, selectedFile?.name);
    axios.post('http://localhost:3001/profile', formData);
  };

  const handleFileChange = (e) => {
    const file = files.current.files[0];
    const reader = new FileReader();
    setSelectedFile(file);
    reader.addEventListener(
      'load',
      () => {
        setImage(reader.result);
      },
      false
    );
    if (file.type.includes('image/')) reader.readAsDataURL(file);
  };

  return (
    <>
      <Container>
        {!!image && <img src={image} alt='Preview' />}
        <form onSubmit={handleSubmit}>
          <input
            type='file'
            name='photo'
            ref={files}
            onChange={handleFileChange}
          />

          <input type='submit' value='submt' />
        </form>
      </Container>
    </>
  );
};

export default FileHandling;
