import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSurvey, removeSurvey } from "../slice/surveySlice";

function SurveyForm() {
  const dispatch = useDispatch();
  const surveys = useSelector((state) => state.survey.surveys);

  const [formData, setFormData] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "",
    perokok: "",
    brandRokok: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      brandRokok: checked
        ? [...prev.brandRokok, id]
        : prev.brandRokok.filter((brand) => brand !== id),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nama || !formData.umur || !formData.jenisKelamin || !formData.perokok) {
      alert("Semua field harus diisi!");
      return;
    }

    dispatch(addSurvey(formData));

    setFormData({
      nama: "",
      umur: "",
      jenisKelamin: "",
      perokok: "",
      brandRokok: [],
    });
  };

  const handleDelete = (id) => {
    dispatch(removeSurvey(id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Formulir Survey Perokok</h1>
          <p className="text-gray-600 mb-6">Silakan isi formulir di bawah ini dengan lengkap</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nama */}
            <div>
              <label htmlFor="nama" className="block text-sm font-semibold text-gray-700 mb-2">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama Anda"
              />
            </div>

            {/* Umur */}
            <div>
              <label htmlFor="umur" className="block text-sm font-semibold text-gray-700 mb-2">
                Umur
              </label>
              <input
                type="number"
                id="umur"
                name="umur"
                value={formData.umur}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan umur Anda"
              />
            </div>

            {/* Jenis Kelamin */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Jenis Kelamin
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="jenisKelamin"
                    id="L"
                    value="Laki-laki"
                    checked={formData.jenisKelamin === "Laki-laki"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <label htmlFor="L" className="ml-2 text-gray-700">
                    Laki-laki
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="jenisKelamin"
                    id="P"
                    value="Perempuan"
                    checked={formData.jenisKelamin === "Perempuan"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <label htmlFor="P" className="ml-2 text-gray-700">
                    Perempuan
                  </label>
                </div>
              </div>
            </div>

            {/* Apakah Anda Perokok? */}
            <div>
              <label htmlFor="perokok" className="block text-sm font-semibold text-gray-700 mb-2">
                Apakah Anda seorang perokok?
              </label>
              <select
                id="perokok"
                name="perokok"
                value={formData.perokok}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Pilih</option>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
              </select>
            </div>

            {/* Brand Rokok */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Brand rokok yang digunakan
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="s"
                    checked={formData.brandRokok.includes("s")}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor="s" className="ml-2 text-gray-700">
                    Sampoerna
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="gg"
                    checked={formData.brandRokok.includes("gg")}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor="gg" className="ml-2 text-gray-700">
                    Gudang Garam
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="dj"
                    checked={formData.brandRokok.includes("dj")}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor="dj" className="ml-2 text-gray-700">
                    Djarum
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
            >
              Kirim Survey
            </button>
          </form>
        </div>

        {/* Survey Results Section */}
        {surveys.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Data Survey ({surveys.length})
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Nama</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Umur</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Jenis Kelamin</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Status Perokok</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Brand Rokok</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {surveys.map((survey, index) => (
                    <tr key={survey.id} className="hover:bg-gray-50 transition">
                      <td className="border border-gray-300 px-4 py-3 text-gray-800">{index + 1}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-800">{survey.nama}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-800">{survey.umur}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-800">{survey.jenisKelamin}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-800">{survey.perokok}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-800">
                        {survey.brandRokok && survey.brandRokok.length > 0
                          ? survey.brandRokok.map((id) => {
                              const brands = { s: "Sampoerna", gg: "Gudang Garam", dj: "Djarum" };
                              return brands[id];
                            }).join(", ")
                          : "-"}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        <button
                          onClick={() => handleDelete(survey.id)}
                          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded transition duration-200 text-sm"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {surveys.length === 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600 text-lg">Belum ada data survey. Silakan isi formulir di atas.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SurveyForm;
