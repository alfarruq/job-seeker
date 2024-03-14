import { NavLink, useNavigate } from "react-router-dom";
import { path } from "../../utils/index";
import logo from "../../assets/img/logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center box-border ">
      <div className="flex gap-10 items-center  ">
        <img onClick={() => navigate("/")} src={logo} alt="" />
        <nav>
          <ul className="flex gap-5 transition duration-500 font-bold  ">
            {path.map(({ id, path, name, hidden }) => {
              return !hidden ? (
                <li
                  className="whitespace-nowrap   "
                  key={id}
                  onClick={() => navigate(path)}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "text-black hover:text-blue-700 "
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ) : null;
            })}
          </ul>
        </nav>
      </div>
      <nav>
        <button className="bg-blue-500 m-5 p-2">Sign In</button>
        <button className="bg-blue-500 m-5 p-2">Sign Up</button>
      </nav>
    </header>
  );
}

export default Header;
