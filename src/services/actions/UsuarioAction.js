import HttpClient from "../HttpClient";
import axios from "axios";

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

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

export const loginUsuario = (usuario) => {
  return new Promise((resolve, eject) => {
    instancia
      .post("/auth/login", usuario)
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

export const externalLogin = (usuario, dispatch) => {
  return new Promise((resolve, eject) => {
    instancia
      .post("/auth/registerExternalLogin", usuario)
      .then((response) => {
        dispatch({
          type: "INICIAR_SESION",
          sesion: response.data.user,
          autenticado: true,
        });
        window.localStorage.setItem("id", response.data.user.id);
        window.localStorage.setItem("token_seguridad", response.data.token);
        window.history.pushState(null, null, "/");
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response);
        resolve(error.response);
      });
  });
};

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

export const changeImg = (file, usuario, dispatch) => {
  return new Promise((resolve, eject) => {
    HttpClient.post(`/users/${usuario.id}/photos`, file)
      .then((response) => {
        dispatch({
          type: "ACTUALIZAR_USUARIO",
          nuevoUsuario: {
            ...usuario,
            photoUrl: response.data.url,
          },
          autenticado: true,
        });
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

export const obtenerUsuarioActual = (id, dispatch) => {
  return new Promise((resolve, eject) => {
    HttpClient.get(`/users/${id}/detailed`)
      .then((response) => {
        dispatch({
          type: "INICIAR_SESION",
          sesion: response.data.userToReturn,
          autenticado: true,
        });
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response);
        resolve(error.response);
      });
  });
};
