import HttpClient from "../HttpClient";

export const getConversation = (id) => {
  return new Promise((resolve, eject) => {
    HttpClient.get(`users/${id}/Messages/conversations`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response);
        resolve(error.response);
      });
  });
};

export const sendMessageAction = (id, message) => {
  return new Promise((resolve, eject) => {
    HttpClient.post(`users/${id}/messages`, message)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("error", error.response);
        resolve(error.response);
      });
  });
};
export const getChatBalloons = (userId, recipientId) => {
  return new Promise((resolve, eject) => {
    HttpClient.get(`users/${userId}/messages/thread/${recipientId}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response);
        resolve(error.response);
      });
  });
};
