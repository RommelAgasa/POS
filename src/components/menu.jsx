import { useState } from 'react';
import ItemCard from './item-card';
import Modal from './modal';

export default function Menu(){

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid gap-5 mt-5">
        {/* Add Button and Search */}
        <div className="flex justify-between bg-gray-50 rounded-sm p-3">
            <button className="uppercase text-xs cursor-pointer border p-2 rounded-sm 
            text-white bg-blue-600 hover:bg-blue-500 transition"
            onClick={() => setIsOpen(true)}>
                <i className="fa-solid fa-plus"></i> Add new item
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <div className="flex gap-2">
                <input
                type="text"
                placeholder="Search items here..."
                className="border border-gray-300 focus:border-blue-500 outline-none px-3 py-2 rounded-md w-full"
                />
                <button className="bg-blue-600 text-white rounded-[50%] p-3 text-sm">
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 overflow-y-auto max-h-[600px]">
        {
            // Food Here
        }
        </div>
    </div>
    );

}