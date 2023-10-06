import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

function NavBar() {
  return (
    <>
      <nav className="p-3 mb-3 border-b-2 border-blue-500">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-start items-center">
            <NavLink
              to="/"
              className=" border-b border-black  hover:text-blue-500
               "
            >
              <img className="h-20 w-30 " src={logo} alt="logo" />
            </NavLink>
          </div>

          {/* List 😆 */}
          <ul className="flex flex-wrap gap-10 text-white text-xl">
            <li className="hover:text-blue-500">
              <NavLink activeClassName="active" to="/">
                Character
              </NavLink>
            </li>
            <li className="hover:text-blue-500">
              <NavLink to="/episode">Episode</NavLink>
            </li>
            <li className="hover:text-blue-500">
              <NavLink to="/location">Location</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar
 