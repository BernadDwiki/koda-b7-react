function ProductTable({ products, onEdit, onDelete }) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center text-slate-600">
        <h2 className="text-xl font-semibold mb-2">Tabel Product</h2>
        <p>Belum ada data product.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">Tabel Product</h2>
      <table className="min-w-full divide-y divide-slate-200 border border-slate-200 bg-white shadow-sm">
        <thead className="bg-slate-900 text-white">
          <tr>
            <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold">No</th>
            <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold">Nama Product</th>
            <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold">Harga</th>
            <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold">Stok</th>
            <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {products.map((product, index) => (
            <tr key={product.id} className="hover:bg-slate-50">
              <td className="border border-slate-200 px-4 py-3 text-sm text-slate-800">{index + 1}</td>
              <td className="border border-slate-200 px-4 py-3 text-sm text-slate-800">{product.name}</td>
              <td className="border border-slate-200 px-4 py-3 text-sm text-slate-800">Rp {product.price}</td>
              <td className="border border-slate-200 px-4 py-3 text-sm text-slate-800">{product.stock}</td>
              <td className="border border-slate-200 px-4 py-3 text-center space-x-2 text-sm">
                <button
                  type="button"
                  onClick={() => onEdit(product)}
                  className="rounded-lg bg-amber-500 px-3 py-1 text-white transition hover:bg-amber-600"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(product.id)}
                  className="rounded-lg bg-red-600 px-3 py-1 text-white transition hover:bg-red-700"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
