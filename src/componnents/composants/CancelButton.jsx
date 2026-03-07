export default function CancelButton({ onDelete }) {
  return (
    <button type="button" onClick={onDelete}>
      ❌
    </button>
  );
}
