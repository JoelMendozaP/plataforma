export const openSnackbar = (content, status) => ({
  type: "OPEN_SNACKBAR",
  content,
  status,
});
export const startSession = (user, status) => ({
  type: "START_SESSION",
  user,
  status,
});
export const closeSession = () => ({
  type: "CLOSE_SESSION",
});
export const updateUser = (user) => ({
  type: "UPDATE_USER",
  user,
});
export const changeLanguageAction = (newLang) => ({
  type: "CHANGE_LANGUAGE",
  newLang,
});
export const changeInfo = (data) => ({
  type: "CHANGE_INFO",
  data,
});