import "../styles/Field.css";
export default function Field({ label, onChange, value }) {
  return (
    <label className="section-input-field">
      {label}
      <input className="text-input" value={value} onChange={onChange} />
    </label>
  );
}