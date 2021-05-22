const userData = (data) => {
  return {
    type: "FETCH_USER",
    payload: data,
  };
};

export default userData;
