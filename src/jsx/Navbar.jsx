import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения состояния бургера
  const toggleBurger = () => {
    setIsOpen((prev) => !prev);
  };

  // Функция для закрытия бургера
  const closeBurger = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar__header">
        <Link to="/" className="navbar__logo" onClick={closeBurger}>
          <img src="/public/images/FlavoraGrey.svg" alt="Flavora logo" />
        </Link>
        <button className="navbar__toggle" onClick={toggleBurger}>
          ☰
        </button>
      </div>

      <nav className={`navbar__nav ${isOpen ? "navbar__nav--open" : ""}`}>
        <li className="navbar__unit">
          <Link className="navbar__link" to="/" onClick={closeBurger}>
            main
          </Link>
        </li>
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
          <Link
            className="navbar__link"
            to="/elderflower"
            onClick={closeBurger}
          >
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
