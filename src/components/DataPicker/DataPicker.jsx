import ReactDatePicker from "react-datepicker";

const DatePickerField = ({ value, onChange }) => (
  <ReactDatePicker
    selected={value}
    onChange={onChange}
    placeholderText="Select date"
    dateFormat="dd/MM/yyyy"
  />
);

export default DatePickerField; 