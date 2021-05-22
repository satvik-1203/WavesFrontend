//initial state
const tokenState = {
  jwtToken: "",
};

const token = (state = tokenState, action) => {
  switch (action.type) {
    case "FETCHTOKEN":
      return { jwtToken: action.payload.jwtToken };

    default:
      return state;
  }
};

export default token;
