function Switch({ checked, className , onChange}) {
  return (
    <span className={className}>
      <input
        className="switch-input-hidden visually-hidden"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="switch"></span>
    </span>
  );
}

export default Switch;
