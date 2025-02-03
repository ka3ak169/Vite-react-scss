import { Link, useLocation } from "react-router-dom";

function Navbar({ isNavOpen, setIsNavOpen }) {
  const location = useLocation(); // Получаем текущий путь

  // Функция для переключения состояния бургера
  const toggleBurger = () => {
    setIsNavOpen((prev) => !prev);
  };

  // Функция для закрытия бургера
  const closeBurger = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar__header">
        {/* Логотип */}
        <Link
          to="/"
          className={`navbar__logo ${
            location.pathname === "/" ? "navbar--home" : ""
          }`}
          onClick={closeBurger}
        >
          <img src="/images/FlavoraGrey.svg" alt="Flavora logo" />
        </Link>

        {/* Бургер-меню */}
        <button className="navbar__toggle" onClick={toggleBurger}>
          {isNavOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Меню навигации */}
      <nav className={`navbar__nav ${isNavOpen ? "navbar__nav--open" : ""}`}>
        {/* <li className="navbar__unit">
          <Link className="navbar__link" to="/" onClick={closeBurger}>
            main
          </Link>
        </li> */}
        <li className="navbar__unit">
          <Link className="navbar__link" to="/gin" onClick={closeBurger}>
            gin
          </Link>
        </li>
        <li className="navbar__unit">
          <Link className="navbar__link" to="/herbal" onClick={closeBurger}>
            herbal
          </Link>
        </li>
        <li className="navbar__unit">
          <Link className="navbar__link" to="/triple-sec" onClick={closeBurger}>
            triple sec
          </Link>
        </li>
        <li className="navbar__unit">
          <Link className="navbar__link" to="/bergamot" onClick={closeBurger}>
            bergamot
          </Link>
        </li>
        <li className="navbar__unit">
          <Link className="navbar__link" to="/elderflower" onClick={closeBurger}>
            elderflower
          </Link>
        </li>
        <li className="navbar__unit">
          <Link className="navbar__link" to="/feijoa" onClick={closeBurger}>
            feijoa
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;
