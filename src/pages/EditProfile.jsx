import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/context";
import ProfileEditor from "../components/ProfileEditor";

function EditProfile() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="mb-4 text-lg">Harus login terlebih dahulu</p>
          <button
            onClick={() => navigate("/login")}
            className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 rounded-md bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
        >
          ← Back
        </button>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Edit Profile</h1>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-8 flex items-center gap-4">
              <img
                src={user?.profile_photo || "https://via.placeholder.com/80?text=Profile"}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border border-gray-200"
              />
              <div>
                <p className="text-sm text-gray-500">User</p>
                <p className="text-2xl font-semibold">{user?.username}</p>
              </div>
            </div>
            <ProfileEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
