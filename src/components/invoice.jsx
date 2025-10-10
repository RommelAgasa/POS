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
        <div className='grid gap-2 h-64 overflow-auto'>
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
        <div className='grid gap-4'>
            <div className="font-bold">Payment Summary</div>
            <div className='mt-4 flex justify-between'>
                <div className='leading-8'>
                    <h1>Sub Total</h1>
                    <h1>Tax</h1>
                </div>
                <div className='leading-8'>
                    <div>&#8369;131.2</div>
                    <div>&#8369;131.2</div>
                </div>
            </div>
            <div className='border-t-2 border-gray-500 border-dashed w-4/4 mx-auto my-4'></div>
            <div>
                <div className='flex justify-between'>
                    <h1>Total Payment</h1>
                    <div className='font-bold'>&#8369;131.2</div>
                </div>
                <div className='p-1 bg-gray-300 rounded-md flex justify-center items-center mt-3'>
                    <div className='grid grid-cols-3'>
                        <div className='flex gap-2 flex-col items-center hover:bg-gray-50 rounded-2xl p-3 leading-5 cursor-pointer'>
                            <span><i class="fa-solid fa-credit-card"></i></span>
                            <h4>Credit Card</h4>
                        </div>
                        <div className='flex gap-2 flex-col items-center hover:bg-gray-50 rounded-2xl p-3 leading-5 cursor-pointer'>
                            <span><i class="fa-solid fa-note-sticky"></i></span>
                            <h4>Pay Later</h4>
                        </div>
                        <div className='flex gap-2 flex-col items-center hover:bg-gray-50 rounded-2xl p-3 leading-5 cursor-pointer'>
                            <span><i class="fa-solid fa-cash-register"></i></span>
                            <h4>Cash Payout</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className='bg-blue-600 hover:bg-blue-400 text-white rounded-sm p-4 w-full'>Place An Order</button>
            </div>
        </div>
    </div>
  );
}
