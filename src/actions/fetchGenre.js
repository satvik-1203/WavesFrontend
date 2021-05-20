import axios from "axios";
import { genres } from "../api";

const fetchGenre = () => async (dispatch) => {
  const genresData = await axios.get(genres());
  dispatch({
    type: "FETCH_DATA",
    payload: {
      genres: [...genresData.data],
    },
  });
};

export default fetchGenre;
