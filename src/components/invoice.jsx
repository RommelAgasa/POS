import food_img from '../assets/img/fresh-pasta-with-hearty-bolognese-and-parmesan-cheese.jpg'

function OrderItems(props){

    const { itemName, item_img, quantity, item_price} = props;

    return (
        <div className='flex gap-3 w-full relative border-b border-gray-300 p-2'>
            <div className='absolute top-2 right-6'>
                <button className='bg-gray-200 rounded-[50%] p-1 cursor-pointer hover:bg-gray-100'><i class="fa-solid fa-minus"></i></button>
            </div>
            <div>
                {
                    item_img && 
                    <img src={item_img}
                    className='w-20 rounded-sm'/>
                }
            </div>
            <div>
                <h1 className='font-bold'>{itemName}</h1>
                <h2>Qty: {quantity}</h2>
                <div className='absolute bottom-2 right-6 font-bold'>&#8369;{item_price}</div>
            </div>
        </div>
    );
}


export default function Invoice() {
  return (
    <div className="flex flex-col gap-5 bg-gray-50 min-h-screen w-full rounded-sm p-4">
        <div className="font-bold">
            Invoice
        </div>
        <div className='grid gap-2 h-86 overflow-auto'>
            <OrderItems item_img={food_img} itemName="Pasta Bologneses" quantity={2} item_price={50}/>
            <OrderItems item_img={food_img} itemName="Pasta Bologneses" quantity={2} item_price={50}/>
            <OrderItems item_img={food_img} itemName="Pasta Bologneses" quantity={2} item_price={50}/>
            <OrderItems item_img={food_img} itemName="Pasta Bologneses" quantity={2} item_price={50}/>
            <OrderItems item_img={food_img} itemName="Pasta Bologneses" quantity={2} item_price={50}/>
            <OrderItems item_img={food_img} itemName="Pasta Bologneses" quantity={2} item_price={50}/>
            <OrderItems item_img={food_img} itemName="Pasta Bologneses" quantity={2} item_price={50}/>
            <OrderItems item_img={food_img} itemName="Pasta Bologneses" quantity={2} item_price={50}/>
            <OrderItems item_img={food_img} itemName="Pasta Bologneses" quantity={2} item_price={50}/>
        </div>
        <div>
            <div className="font-bold">Payment Summary</div>
            <div></div>
        </div>
    </div>
  );
}
