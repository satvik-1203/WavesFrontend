import React from "react";
import { useSelector } from "react-redux";

const GenreTab = () => {
  const { genres } = useSelector((state) => state.apiData);

  return (
    <div>
      {genres && (
        <div>
          <div className="genreGrid">
            {genres.map((genre) => (
              <div className="genreName" key={genre._id}>
                {genre.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreTab;
