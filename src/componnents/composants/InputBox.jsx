import { useState } from "react";

export default function InputBox({ addTodo }) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim() !== "") {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <div
      className="flex justify-around items-center w-lg py-5 pl-4 border-2 rounded-2xl border-gray-300 
          hover:border-orange-400 shadow-md animate-fadeIn 
          focus:border-orange-500 focus:outline-none
          transition duration-200 text-base sm:text-sm"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="add todo"
        className="block w-100 p-2 focus:outline-none pl-4"
      />
    </div>
  );
}
