function TimePeriod({ label, onSelect, selectedPeriod }) {
  function selectPeriod() {
    onSelect(label);
  }

  return (
    <p
      className={`hover:text-white hover:cursor-pointer ${
        selectedPeriod === label ? "text-white" : ""
      }`}
      onClick={selectPeriod}
    >
      {label}
    </p>
  );
}

export default TimePeriod;
