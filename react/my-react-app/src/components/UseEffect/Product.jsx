// 개별 product 컴포넌트
export default function Product({ product }) {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition cursor-pointer">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">
          {product.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
      </div>
      <div>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <p className="mt-3 text-lg font-bold text-blue-600">
          {product.price} $
        </p>
      </div>
    </div>
  );
}
