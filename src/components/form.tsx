import { useState } from "react";

type FormProps = {
    onCLose(): void;
}


export default function AddNewItemForm({onCLose} : FormProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedFile) {
      console.log("File selected:", selectedFile);
      // Example: upload using FormData
      // const formData = new FormData();
      // formData.append("image", selectedFile);
      // await fetch("/api/upload", { method: "POST", body: formData });
    } else {
      alert("Please select a file first!");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-4 ">
        <div className="border-b"></div>
        <div className="grid grid-cols-2 mt-5">
            <label className="block mb-1 font-medium">Upload Image:</label>
            <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full border border-gray-300 rounded p-2"
            />
        </div>
        <div className="grid grid-cols-2">
            <label className="block mb-1 font-medium">Item Name:</label>
            <input
            type="text"
            className="block w-full border border-gray-300 rounded p-2"
            />
        </div>
        <div className="grid grid-cols-2">
            <label className="block mb-1 font-medium">Category:</label>
            <select className="block w-full border border-gray-300 rounded p-2">
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
            </select>
        </div>
        <div className="grid grid-cols-2">
            <label className="block mb-1 font-medium">Item Price:</label>
            <input
            type="number"
            className="block w-full border border-gray-300 rounded p-2"
            />
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <button
            type="submit"
            className="mt-3 px-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
            Save
        </button>
        <button onClick={onCLose} className="mt-3 px-4 p-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            Close
        </button>
      </div>

      {selectedFile && (
        <div className="mt-3">
          <p className="text-sm text-gray-600">Preview:</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Preview"
            className="mt-2 w-40 h-40 object-cover rounded border"
          />
        </div>
      )}
    </form>
  );
}
