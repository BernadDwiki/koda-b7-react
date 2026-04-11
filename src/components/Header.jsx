import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import themeCtx from '../context/theme/context.js';
import { useContext } from "react";
import LogoutButton from "./LogoutButton";
import AuthContext from "../context/auth/context";

function Header() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(themeCtx);
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <header className={`py-4 px-6 shadow-md ${theme === "dark" ? "bg-slate-900 text-white" : "bg-amber-100 text-black"}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">My App</h1>
          <button onClick={toggleTheme} className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700">
            Toggle Theme
          </button>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-3 cursor-pointer hover:opacity-70" onClick={() => navigate("/edit-profile")}>
                <img
                  src={user?.profile_photo || "https://via.placeholder.com/48?text=User"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
                <span className="font-medium">{user?.username}</span>
              </div>
              <button
                onClick={() => navigate("/edit-profile")}
                className="rounded-md bg-blue-500 px-3 py-1 text-white text-sm hover:bg-blue-600"
              >
                Edit Profile
              </button>
              <LogoutButton />
            </>
          ) : (
            <NavLink
              to="/login"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
