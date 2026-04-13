import { useEffect, useState } from "react";

function ProductForm({ initialData = { name: "", price: "", stock: "" }, submitLabel = "Tambah Product", onSubmit, onCancel, loading }) {
  const [name, setName] = useState(initialData.name || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [stock, setStock] = useState(initialData.stock || "");

  useEffect(() => {
    setName(initialData.name || "");
    setPrice(initialData.price || "");
    setStock(initialData.stock || "");
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !price || !stock) return;
    onSubmit({ id: initialData.id, name, price, stock });
    if (!initialData.id) {
      setName("");
      setPrice("");
      setStock("");
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="rounded-3xl border border-slate-300 bg-slate-100 p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Form Input Product</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-700">Nama Product</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama product"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Harga</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Masukkan harga"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Stok</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="Masukkan stok"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sedang memproses..." : submitLabel}
            </button>
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 transition hover:bg-slate-50"
              >
                Batal
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;