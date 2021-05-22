const fetchToken = (token) => async (dispatch) => {
  dispatch({
    type: "FETCHTOKEN",
    payload: {
      jwtToken: token,
    },
  });
};

export default fetchToken;
