import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenreTab from "./GenreTab";

export default function Nav() {
  const [toggleGenre, setToggleGenre] = useState(false);

  return (
    <nav>
      <div id="logo">Waves</div>
      <div className="details">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <div
              onClick={(e) => {
                e.preventDefault();
                setToggleGenre(!toggleGenre);
              }}
              className="genre"
            >
              Genre
            </div>
            {toggleGenre && (
              <div className="genreTab">
                <GenreTab></GenreTab>
              </div>
            )}
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
