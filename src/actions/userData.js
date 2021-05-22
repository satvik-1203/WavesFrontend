const userData = (data) => async (dispatch) => {
  dispatch({
    type: "FETCH_USER",
    payload: data,
  });
};

export default userData;
