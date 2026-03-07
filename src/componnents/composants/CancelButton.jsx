import { Plus, X, Trash2 } from "lucide-react";

export default function CancelButton({ onDelete }) {
  return (
    <button
      type="button"
      onClick={onDelete}
      className=" text-gray-300 text-2xl"
    >
      x
    </button>
  );
}
