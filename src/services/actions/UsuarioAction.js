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
        console.log(response);
        dispatch({
          type: "INICIAR_SESION",
          sesion: response.data.rolsAssigned[0].user,
          autenticado: true,
        });
        resolve(response);
        console.log("logueado", response.data.rolsAssigned[0].user);
      })
      .catch((error) => {
        console.log(error.response);
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

// export const obtenerUsuarioActual = () => {
//   return new Promise((resolve, eject) => {});
// };
