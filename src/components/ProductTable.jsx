function ProductTable({ products }) {
  if (products.length === 0) {
    return (
      <div>
        <h2>Tabel Product</h2>
        <p>Belum ada data product.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Tabel Product</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2 text-center">No</th>
            <th className="border border-black px-4 py-2 text-center">Nama Product</th>
            <th className="border border-black px-4 py-2 text-center">Harga</th>
            <th className="border border-black px-4 py-2 text-center">Stok</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td className="border border-black px-4 py-2 text-center">{i + 1}</td>
              <td className="border border-black px-4 py-2 text-center">{p.name}</td>
              <td className="border border-black px-4 py-2 text-center">Rp {p.price}</td>
              <td className="border border-black px-4 py-2 text-center">{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;