import { Menu, Moon, Sun } from "lucide-react";

import holbertonLogo from "../assets/images/logo-holberton.webp";

function Header() {
  return (
    <header className="fixed w-full p-4 bg-base-100 shadow-xs z-50">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="navbar-start flex flex-row justify-between items-center gap-4">
          <nav className="dropdown">
            {/* Responsive menu button */}
            <div className="lg:hidden cursor-pointer" tabIndex={0} role="button">
              <Menu />
            </div>

            {/* Responsive menu */}
            <ul className="menu menu-sm dropdown-content w-52 mt-3 p-2 rounded-box bg-base-100 z-50 shadow" tabIndex="-1">
              <li>
                <a href="#about-section">About</a>
              </li>

              <li>
                <a href="#programs-section">Programs</a>
              </li>

              <li>
                <a href="#methodology-section">Methodology</a>
              </li>

              <li>
                <a href="campuses-section">Campuses</a>
              </li>
            </ul>
          </nav>

          {/* Brand */}
          <a className="w-full h-full cursor-pointer" href="/">
            <img className="h-6" src={holbertonLogo} alt="Holberton logo" />
          </a>
        </div>

        <nav className="navbar-center hidden lg:flex">
          {/* Menu */}
          <ul className="menu menu-horizontal mt-1">
            <li>
              <a href="#about-section">About</a>
            </li>

            <li>
              <a href="#programs-section">Programs</a>
            </li>

            <li>
              <a href="#methodology-section">Methodology</a>
            </li>

            <li>
              <a href="campuses-section">Campuses</a>
            </li>
          </ul>
        </nav>

        <div className="navbar-end">
          {/* Theme controller */}
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="black" />

            <Sun className="swap-on" size={18} />

            <Moon className="swap-off" size={18} />
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;