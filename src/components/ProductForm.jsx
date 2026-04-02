import { useState } from "react";

function ProductForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !price || !stock) return;
    onSubmit({ name, price, stock });
    setName("");
    setPrice("");
    setStock("");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2 w-fit border-2 border-black p-4 bg-amber-300">
      <h2>Form Input Product</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div>
          <label>Nama Product: </label>
          <input
            className="border-b-2 border-black w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=" Masukkan nama product"
          />
        </div>
        <br />
        <div>
          <label>Harga: </label>
          <input
            className="border-b-2 border-black w-full"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder=" Masukkan harga"
          />
        </div>
        <br />
        <div>
          <label>Stok: </label>
          <input
            className="border-b-2 border-black w-full"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder=" Masukkan stok"
          />
        </div>
        <br />
        <button className="border-2 border-black p-1 my-5 bg-blue-400" type="submit">Tambah Product</button>
      </form>
    </div>
  );
}

export default ProductForm;