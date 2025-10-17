function ItemCard({ img, itemName, desc, price }) {
  return (
    <div className="bg-gray-50 rounded-sm p-3">
      <div className="flex gap-2">
        <div>
          {img && (
            <img
              src={img}
              alt={itemName}
              className="w-22 rounded-sm"
            />
          )}
        </div>
        <div>
          <h1 className="font-bold mb-2 text-sm">{itemName}</h1>
          <p className="w-40 text-sm opacity-75">{desc}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <span>&#8369;{price}</span>
        </div>
        <div className="flex gap-4 bg-gray-200 rounded-2xl p-1">
          <button className="bg-gray-50 rounded-[50%] p-1 cursor-pointer hover:bg-gray-100">
            <i className="fa-solid fa-plus"></i>
          </button>
          <div id="quantity">3</div>
          <button className="bg-gray-50 rounded-[50%] p-1 cursor-pointer hover:bg-gray-100">
            <i className="fa-solid fa-minus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
