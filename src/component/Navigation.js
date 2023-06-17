import React, { useContext } from "react";

export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext);
  
    const handleToggle = () => {
      toggle();
    };
  
    return (
      <>
        <nav className="menu-list-container">
          <ul>
            <div
              className="Header"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
              }}
            >
              <div className="abc">
                <li>
                  <a
                    className={`${dark ? "color-menu-light" : "color-menu"}`}
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className={`${dark ? "color-menu-light" : "color-menu"}`}
                    href="#news"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    className={`${dark ? "color-menu-light" : "color-menu"}`}
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className={`${dark ? "color-menu-light" : "color-menu"}`}
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </div>
            </div>
          </ul>
  
          <div className="ex-11">
            <button>
              <li>
                <span
                  className="switch-mode"
                  onClick={handleToggle}
                  data-testid="toggle-theme-btn"
                >
                  Switch Nav to {!dark ? "Dark" : "Light"} mode
                </span>
              </li>
            </button>
          </div>
        </nav>
      </>
    );
  }
  