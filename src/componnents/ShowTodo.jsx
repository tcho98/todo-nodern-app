import ButtonCheckbox from "./composants/ButtonCheckbox";
import CancelButton from "./composants/CancelButton";
export default function ShowTodo({
  text,
  completed,
  id,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <>
      <div
        className="flex justify-between px-8 items-center w-lg py-6  border-1 rounded-2xl border-gray-300 hover:border-orange-400 
        focus:border-orange-500 focus:outline-none
        transition duration-200 text-base "
      >
        <ButtonCheckbox completed={completed} onToggle={() => toggleTodo(id)} />
        <span className={completed ? "line-through text-gray-400" : ""}>
          {text}
        </span>
        <CancelButton onDelete={() => deleteTodo(id)} />
      </div>
    </>
  );
}
