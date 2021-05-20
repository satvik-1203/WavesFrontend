import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenreTab from "./GenreTab";
import { NavLinks } from "../misc/Navlinks";

export default function Nav() {
  const [toggleGenre, setToggleGenre] = useState(false);

  return (
    <nav>
      <div id="logo">Waves</div>
      <div className="details">
        <ul>
          {NavLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
