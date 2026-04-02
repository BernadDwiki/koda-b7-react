import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-slate-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-semibold" : "hover:text-gray-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/minitask1"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-semibold" : "hover:text-gray-300"
                }
              >
                MiniTask1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/minitask2"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-semibold" : "hover:text-gray-300"
                }
              >
                MiniTask2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/minitask3"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 font-semibold" : "hover:text-gray-300"
                }
              >
                MiniTask3
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;