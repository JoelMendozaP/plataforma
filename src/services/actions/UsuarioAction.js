import HttpClient from "../HttpClient";

export const registerUser = (usuario) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/auth/register", usuario).then((response) => {
      resolve(response);
      console.log(response);
    });
  });
};

export const loginUsuario = (usuario) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/auth/login", usuario).then((response) => {
      resolve(response);
      console.log(response);
    });
  });
};

// export const obtenerUsuarioActual = () => {
//   return new Promise((resolve, eject) => {});
// };
