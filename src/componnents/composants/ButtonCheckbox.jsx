export default function ButtonCheckbox({ completed, onToggle }) {
  return (
    <input
      type="checkbox"
      className="w-5 h-5 accent-orange-500 border-orange-400 bg-white  cursor-pointer"
      checked={completed}
      onChange={onToggle}
    />
  );
}
