const fetchToken = (token) => {
  return {
    type: "FETCHTOKEN",
    payload: {
      jwtToken: token,
    },
  };
};

export default fetchToken;
