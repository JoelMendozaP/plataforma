import HttpClient from "../HttpClient";
import axios from "axios";

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const changeLang = (lg, usuario) => {
  return new Promise((resolve, eject) => {
    HttpClient.put(`/users/${usuario.id}/language`, lg)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("error", error.response);
        resolve(error.response);
      });
  });
};
export const changeImg = (file, usuario) => {
  return new Promise((resolve, eject) => {
    HttpClient.post(`/users/${usuario.id}/photos`, file)
      .then((response) => {
        resolve(response);
        console.log("then", response);
      })
      .catch((error) => {
        console.log("error", error.response);
        resolve(error.response);
      });
  });
};

export const changePassword = (id, body) => {
  return new Promise((resolve, eject) => {
    HttpClient.put(`/users/${id}/changepassword`, body)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const updateUserService = (id, body) => {
  return new Promise((resolve, eject) => {
    HttpClient.put(`/users/${id}/UpdateUser`, body)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const verifykey = (usuario) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/users/VerifyKeyFromEmail", usuario)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response);
        resolve(error.response);
      });
  });
};

export const SendVerify = (usuario) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/users/VerifyEmail", usuario)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response);
        resolve(error.response);
      });
  });
};
