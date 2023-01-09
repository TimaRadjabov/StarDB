import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header d-flex justify-content-between">
      <h2>
        <Link to="/">Star DB</Link>
      </h2>
      <ul className="d-flex header__list">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starship">Starships</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
