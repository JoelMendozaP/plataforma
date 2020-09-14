import React, { useState } from "react";
import user from "../../assets/img/user.jpg";
import axios from "axios";
import "./ChangeImage.css";
function ChangeImage(props) {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      console.log("selected");
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      console.log("file not suport");
    }
  };
  function handleUpload(e) {
    e.preventDefault();

    console.log(imgPreview);
  }

  return (
    <div className="change">
      <div className="change__container">
        <h1 className="change__containerh1">Cambia foto de perfil</h1>
        <div
          style={{
            backgroundImage: imgPreview
              ? `url("${imgPreview}")`
              : `url("${user}")`,
          }}
          className="change__containerImg"
        ></div>
      </div>
      <form action="">
        <input type="file" id="inputFile" onChange={handleImageChange} />
        <div className="label">
          <label htmlFor="inputFile" className="imageUp">
            Escoger imagen<i className="fas fa-file-import"></i>
          </label>
        </div>
        <button
          style={{}}
          className="change__btn"
          disabled={!imgPreview}
          onClick={(e) => handleUpload(e)}
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default ChangeImage;
