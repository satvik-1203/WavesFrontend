import React, { useState } from "react";
import axios from "axios";
import { genres } from "../api";

const GenreAddTab = () => {
  const [inputGenre, setInputGenre] = useState("");

  const genrePostRequest = async () => {
    if (inputGenre.trim === "") return;
    try {
      const result = await axios.post(genres(), {
        name: inputGenre,
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    setInputGenre("");
  };

  return (
    <div className="genreAddTab">
      <input
        value={inputGenre}
        type="text"
        onChange={(e) => {
          setInputGenre(e.target.value);
        }}
      />
      <button onClick={genrePostRequest}>Add</button>
    </div>
  );
};

export default GenreAddTab;
