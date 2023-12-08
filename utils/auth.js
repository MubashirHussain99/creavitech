const isAuthenticated = () => {
  let user = localStorage.getItem("user");
  user = user === undefined ? "" : JSON.parse(user);
  if (user) {
    return true;
  } else {
    return false;
  }
};

export default isAuthenticated;
