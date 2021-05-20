const stateTemplate = {
  genres: [],
};

const apiDataReducer = (state = stateTemplate, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        genres: [...action.payload.genres],
      };

    case "FETCH_GENRE":
      return state.genres;
    default:
      return state;
  }
};

export default apiDataReducer;
