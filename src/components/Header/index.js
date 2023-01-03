import "./header.scss";

const Header = () => {
  return (
    <div className="header d-flex justify-content-between">
      <h2>
        <a href="#">Star DB</a>
      </h2>
      <ul className="d-flex header__list">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
