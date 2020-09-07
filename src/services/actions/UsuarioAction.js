import HttpClient from "../HttpClient";

export const registerUser = (usuario) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/auth/register", usuario).then((response) => {
      resolve(response);
      console.log(response);
    });
  });
};
// dispatch
export const loginUsuario = (usuario) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/auth/login", usuario).then((response) => {
      // dispatch({
      //   type: "INICIAR_SESION",
      //   sesion: response.data,
      //   autenticado: true,
      // });
      resolve(response);
      console.log("logged", response.data.rolsAssigned[0].user);
    });
  });
};

// export const obtenerUsuarioActual = () => {
//   return new Promise((resolve, eject) => {});
// };
