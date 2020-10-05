import HttpClient from "../HttpClient";

export const UserPreference = (id) => {
  return new Promise((resolve, eject) => {
    HttpClient.get(`/users/${id}/preferences`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response);
        resolve(error.response);
      });
  });
};
export const changePreference = (id, pref) => {
  return new Promise((resolve, eject) => {
    HttpClient.put(`/users/${id}/UpdatePreference`, pref)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("error", error.response);
        resolve(error.response);
      });
  });
};
