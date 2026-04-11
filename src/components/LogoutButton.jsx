import { useContext } from "react";
import AuthContext from "../context/auth/context";

function LogoutButton() {
  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm">Welcome, {user?.username}!</span>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;