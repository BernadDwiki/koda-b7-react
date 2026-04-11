import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/context";
import ProfileEditor from "../components/ProfileEditor";

function MiniTask2() {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">MiniTask 2 - User Login Context</h1>

        {!isAuthenticated ? (
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md text-center">
            <p className="mb-4 text-lg">Belum ada user yang login.</p>
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Login Sekarang
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">User Info</h2>
              <div className="flex flex-col items-center gap-4">
                <img
                  src={user?.profile_photo || "https://via.placeholder.com/150?text=Profile"}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border border-gray-200"
                />
                <div className="text-center">
                  <p className="text-sm text-gray-500">Username</p>
                  <p className="text-2xl font-semibold">{user?.username}</p>
                </div>
              </div>
            </div>
            <ProfileEditor />
          </div>
        )}
      </div>
    </div>
  );
}

export default MiniTask2;
