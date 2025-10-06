

function CategoryCard({ categoryName, stock, icon }) {
  return (
    <div
      className="group flex gap-2 bg-gray-50 p-2 rounded-sm cursor-pointer 
                 hover:bg-blue-600 transition-all duration-200">

      <div
        className="bg-gray-200 w-12 m-2 rounded-sm flex justify-center items-center p-3">
        <i className={`text-2xl hover:text-blue-600 ${icon}`}></i>
      </div>

      <div className="text-gray-800 group-hover:text-white transition-all duration-200">
        <h2 className="font-bold uppercase">{categoryName}</h2>
        <h3 className="opacity-70">{stock} menu in stock</h3>
      </div>

    </div>
  );
}




export default function Category(){

    return(
        <div className="grid grid-rows-2 gap-2">
            <div className="grid grid-cols-4 w-full gap-2">
                <CategoryCard categoryName='Breakfast' stock={12} icon='fa-solid fa-bread-slice'/>
                <CategoryCard categoryName='Lunch' stock={12}   icon="fa-solid fa-burger"/>
                <CategoryCard categoryName='Dinner' stock={12}  icon="fa-solid fa-utensils" />
                <CategoryCard categoryName='Soup' stock={12}  icon="fa-solid fa-bowl-food" />
            </div>
            <div className="grid grid-cols-4 w-full gap-2">
                <CategoryCard categoryName='Desserts' stock={12} icon="fa-solid fa-ice-cream" />
                <CategoryCard categoryName='Side Dish' stock={12}   icon="fa-solid fa-fish"/>
                <CategoryCard categoryName='Appetizer' stock={12}  icon="fa-solid fa-hotdog" />
                <CategoryCard categoryName='Beverages' stock={12}   icon="fa-solid fa-wine-bottle"/>
            </div>
        </div>
    );
}