import "./TheSidebar.scss";
import logo from "../../assets/img/logo.png";

export const TheSidebar = () => {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img src={logo} alt="fullpath-logo" />
      </header>
      <nav>
        <ul className="sidebar-links">
          <li>
            <a
              href="https://github.com/Idanatiya"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/idan-atiya-0505911b2/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
