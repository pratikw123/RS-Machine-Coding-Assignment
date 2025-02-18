export function Checkbox({ checked, onCheckedChange }) {
  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={checked}
      onChange={onCheckedChange}
    />
  );
}
