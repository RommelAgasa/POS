

function CategoryCard(props) {
  const { categoryName, stock, icon } = props;

  return (
    <div className="flex gap-2 bg-gray-50 p-2 rounded-sm cursor-pointer">
      <div className="bg-gray-100 w-12 m-2 rounded-sm flex justify-center items-center p-2">
        <i className={`text-2xl ${icon}`}></i>
      </div>
      <div>
        <h2 className="font-bold">{categoryName}</h2>
        <h3 className="opacity-70">{stock} menu in Stock</h3>
      </div>
    </div>
  );
}


export default function Category(){

    return(
        <div className="grid grid-rows-2 gap-4">
            <div className="grid grid-cols-4 w-full gap-4">
                <CategoryCard categoryName='Breakfast' stock={12} icon='fa-solid fa-bread-slice'/>
                <CategoryCard categoryName='Lunch' stock={12}   icon="fa-solid fa-burger"/>
                <CategoryCard categoryName='Dinner' stock={12}  icon="fa-solid fa-utensils" />
                <CategoryCard categoryName='Soup' stock={12}  icon="fa-solid fa-bowl-food" />
            </div>
            <div className="grid grid-cols-4 w-full gap-4">
                <CategoryCard categoryName='Desserts' stock={12} icon="fa-solid fa-ice-cream" />
                <CategoryCard categoryName='Side Dish' stock={12}   icon="fa-solid fa-fish"/>
                <CategoryCard categoryName='Appetizer' stock={12}  icon="fa-solid fa-hotdog" />
                <CategoryCard categoryName='Beverages' stock={12}   icon="fa-solid fa-wine-bottle"/>
            </div>
        </div>
    );
}