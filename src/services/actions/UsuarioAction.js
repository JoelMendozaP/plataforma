import HttpClient from "../HttpClient";

export const registerUser = (usuario, dispatch) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/auth/register", usuario)
      .then((response) => {
        dispatch({
          type: "INICIAR_SESION",
          sesion: response.data.userToReturn,
          autenticado: true,
        });
        resolve(response);
        console.log(response.data.userToReturn);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const loginUsuario = (usuario, dispatch) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/auth/login", usuario)
      .then((response) => {
        dispatch({
          type: "INICIAR_SESION",
          sesion: response.data.rolsAssigned[0].user,
          autenticado: true,
        });
        resolve(response);
        console.log("logueado", response.data.rolsAssigned[0].user);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const changeImg = (file, id) => {
  return new Promise((resolve, eject) => {
    HttpClient.post(`/users/${id}/photos`, file)
      .then((response) => {
        resolve(response);
        console.log("change", response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

// export const obtenerUsuarioActual = () => {
//   return new Promise((resolve, eject) => {});
// };
