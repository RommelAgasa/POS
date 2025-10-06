import food_img from '../assets/img/fresh-pasta-with-hearty-bolognese-and-parmesan-cheese.jpg'


function ItemCard(props){
    const {img, itemName, desc, price} = props;
    
    return (
        <div className='bg-gray-50 rounded-sm p-3'>
            <div className='flex gap-2'>
                <div>
                    {
                        food_img && 
                        <img src={food_img} 
                        className='w-22 rounded-sm'/>
                    }
                </div>
                <div>
                    <h1 className='font-bold mb-2 text-sm'>Pasta Bolognese</h1>
                    <p className='w-40 text-sm opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='mt-4 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <span>&#8369;100.00</span>
                </div>
                <div className='flex gap-4 bg-gray-200 rounded-2xl p-1'>
                    <button className='bg-gray-50 rounded-[50%] p-1 cursor-pointer hover:bg-gray-100'><i class="fa-solid fa-plus"></i></button>
                    <div id='quantity'> 3 </div>
                    <button className='bg-gray-50 rounded-[50%] p-1 cursor-pointer hover:bg-gray-100'><i class="fa-solid fa-minus"></i></button>
                </div>
            </div>
        </div>
    );
}


export default function Menu(){

    return (
        <div className="grid gap-5">

            {/** Add Button and Search */}
            <div className="flex justify-between bg-gray-50 rounded-sm p-3">   
                <button className="uppercase text-xs cursor-pointer border p-2 rounded-sm 
                text-white bg-blue-600 hover:bg-blue-500 transition">
                    <i className="fa-solid fa-plus"></i> Add new item
                </button>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search items here..."
                        className="border border-gray-300 focus:border-blue-500 outline-none px-3 py-2 rounded-md w-full"
                    />
                    <button className="bg-blue-600 text-white rounded-[50%] p-3 text-sm"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 overflow-y-auto max-h-[600px]">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>

        </div>
    );
}