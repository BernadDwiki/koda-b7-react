import { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

function MiniTask2() {
  const [products, setProducts] = useState([]);

  function handleSubmit(product) {
    setProducts([...products, product]);
  }

  return (
    <div className="flex flex-col justify-center items-center border-2 border-black bg-amber-200 gap-3 p-6">
      <ProductForm onSubmit={handleSubmit} />
      <hr />
      <ProductTable products={products} />
    </div>
  );
}

export default MiniTask2;