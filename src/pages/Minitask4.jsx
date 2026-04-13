import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';
import { addProduct, updateProduct, deleteProduct } from '../slice/productSlice';

function MiniTask4() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSubmit = async (product) => {
    if (product.id) {
      await dispatch(updateProduct(product));
      setSelectedProduct(null);
    } else {
      await dispatch(addProduct(product));
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleDelete = async (id) => {
    await dispatch(deleteProduct(id));
    if (selectedProduct?.id === id) {
      setSelectedProduct(null);
    }
  };

  const handleCancel = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">MiniTask 4 - Product Manager</h1>
          <p className="text-slate-600 mb-6">
            Gunakan Redux sebagai sumber data, simulasikan delay dengan thunk, dan simpan produk ke local storage.
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.9fr]">
            <div className="bg-slate-100 rounded-2xl p-6 shadow-sm">
              <ProductForm
                initialData={selectedProduct || { name: '', price: '', stock: '' }}
                submitLabel={selectedProduct ? 'Update Product' : 'Tambah Product'}
                onSubmit={handleSubmit}
                onCancel={selectedProduct ? handleCancel : undefined}
                loading={loading}
              />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ProductTable
                products={products}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>

          {error && (
            <div className="mt-6 rounded-xl border border-red-300 bg-red-50 p-4 text-red-700">
              Terjadi error: {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MiniTask4;
