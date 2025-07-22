import "./InputField.css"

export const InputField = ({title,onAddNumber,value}) => {
  return (
    <p>
      <label>{title}</label>
      <input type="number" onChange={onAddNumber} value={value} />
    </p>
  );
};
