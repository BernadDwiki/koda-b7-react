import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/context";

function ProfileEditor() {
  const { user, updateProfile } = useContext(AuthContext);
  const [username, setUsername] = useState(user?.username || "");
  const [photoUrl, setPhotoUrl] = useState(user?.profile_photo || "");
  const [preview, setPreview] = useState(user?.profile_photo || "");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handlePhotoUrlChange = (e) => {
    setPhotoUrl(e.target.value);
    setPreview(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPhotoUrl(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ username: username.trim() || user.username, profile_photo: photoUrl });
    setMessage("Profile updated successfully.");
  };

  return (
    <div className="max-w-3xl w-full p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-3">
          <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 bg-gray-100">
            <img src={preview || "https://via.placeholder.com/128?text=No+Photo"} alt="Profile preview" className="w-full h-full object-cover" />
          </div>
          <p className="text-sm text-gray-600">Current profile picture</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full md:w-2/3 space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">
              Profile photo URL
            </label>
            <input
              id="photoUrl"
              type="text"
              value={photoUrl}
              onChange={handlePhotoUrlChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="https://example.com/photo.jpg"
            />
          </div>
          <div>
            <label htmlFor="photoFile" className="block text-sm font-medium text-gray-700">
              Or upload file
            </label>
            <input
              id="photoFile"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-600"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Save Profile
          </button>
          {message && <p className="text-sm text-green-600">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default ProfileEditor;
