import user from "../assets/img/user.jpg";
export const validate = (data) => {
  if (data === undefined || data === null) {
    return "Sin dato";
  }
  return data;
};

export const validateImg = (img) => {
  if (img === undefined || img === null) {
    return user;
  }
  return img;
};
