import { createPortal } from "react-dom";
import AddNewItemForm from "./form";


type PropsModal = {
    isOpen(): void;
    onClose(): void;
}


export default function Modal({ isOpen, onClose} : PropsModal) {

    if(!isOpen) return 

    return createPortal(
        <>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg flex flex-col w-[600px] shadow-lg">
                <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">New Item</h1>
                </div>
                <div className="mt-6">
                <AddNewItemForm onCLose={onClose} />
                </div>
            </div>
            </div>
        </>,
        document.body
    );


}