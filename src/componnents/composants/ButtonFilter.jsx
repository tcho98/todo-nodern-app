export default function FilterTodo({ label, value, filter, setFilter }) {
  return (
    <>
      <button
        onClick={() => setFilter(value)}
        className={`px-11 py-3 rounded-3xl border-none transition
      ${filter === value ? "bg-orange-400 text-white" : "bg-gray-100 text-orange-400"}`}
      >
        {label}
      </button>
    </>
  );
}
