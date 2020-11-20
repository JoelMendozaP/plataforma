import React, { useState } from "react";
import user from "../../../assets/img/user.jpg";
import { changeImg } from "../../../services/action/UsuarioAction";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { updateUser } from "../../../store/actions";
import "./style/ChangeImage.css";
function ChangeImage(props) {
  const { sesionUser } = props;
  const [imgPreview, setImgPreview] = useState(sesionUser.user.photoUrl);
  const { t } = useTranslation("ChangeImg");
  const [name, setname] = useState(null);

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    setname(selected);
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
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
    let formdata = new FormData();
    formdata.append("File", name);
    changeImg(formdata, sesionUser.user).then((response) => {
      console.log("changeComponet", response);
      props.updateUser({
        ...sesionUser.user,
        photoUrl: response.data.url,
      });
    });
  }
  return (
    <div className="change">
      <div className="change__container">
        <h2 className="change__containerh1">{t("ciChange")}</h2>
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
            {t("ciSelect")}
            <i className="fas fa-file-import"></i>
          </label>
        </div>
        <button
          className="change__btn"
          disabled={!imgPreview || imgPreview === sesionUser.user.photoUrl}
          onClick={(e) => handleUpload(e)}
        >
          {t("ciSave")}
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sesionUser: state.sesionUser,
  };
};
const mapDispatchToProps = {
  updateUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(ChangeImage);
