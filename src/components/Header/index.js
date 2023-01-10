import { Link, NavLink } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header d-flex justify-content-between">
      <h2>
        <Link to="/">Star DB</Link>
      </h2>
      <ul className="d-flex header__list">
        <li>
          <NavLink to="/people" style={({isActive}) => ({color: isActive ? 'white' : '#00bc8c'})}>People</NavLink>
        </li>
        <li>
          <NavLink  to="/planets" style={({isActive}) => ({color: isActive ? 'white' : '#00bc8c'})}>Planets</NavLink>
        </li>
        <li>
          <NavLink to="/starship" style={({isActive}) => ({color: isActive ? 'white' : '#00bc8c'})}>Starships</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
