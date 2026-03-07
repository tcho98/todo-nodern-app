import InputBox from "./composants/InputBox";

export default function TodoForm() {
  return (
    <>
      <div
        className="flex justify-around items-center w-lg py-5 pl-4 border-2 rounded-2xl border-gray-300 
          hover:border-orange-400 shadow-md animate-fadeIn 
          focus:border-orange-500 focus:outline-none
          transition duration-200 text-base sm:text-sm"
      >
        <InputBox />
      </div>
    </>
  );
}
