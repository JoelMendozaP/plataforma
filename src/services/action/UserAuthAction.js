import axios from "axios";
import HttpClient from "../HttpClient";

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const loginUser = (user) => {
  return new Promise((resolve, eject) => {
    instancia
      .post("/auth/login", user)
      .then((response) => {
        window.localStorage.setItem("id", response.data.user.id);
        window.localStorage.setItem("token_seguridad", response.data.token);
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response);
        resolve(error.response);
      });
  });
};
export const registerUser = (usuario) => {
  return new Promise((resolve, eject) => {
    instancia
      .post("/auth/register", usuario)
      .then((response) => {
        window.localStorage.setItem("id", response.data.userToReturn.id);
        window.localStorage.setItem("token_seguridad", response.data.token);
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};
export const externalLogin = (usuario) => {
  return new Promise((resolve, eject) => {
    instancia
      .post("/auth/registerExternalLogin", usuario)
      .then((response) => {
        window.localStorage.setItem("id", response.data.user.id);
        window.localStorage.setItem("token_seguridad", response.data.token);
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response);
        resolve(error.response);
      });
  });
};

export const obtenerUsuarioActual = (id) => {
  return new Promise((resolve, eject) => {
    HttpClient.get(`/users/${id}/detailed`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response);
        resolve(error.response);
      });
  });
};
