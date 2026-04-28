import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({
  label,
  type = 'text',
  className = '',
  value,
  setValue,
  icon,
  inputAttributes = {},
}) {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`input-container ${className}`}>
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        {icon && <FontAwesomeIcon icon={icon} />}
        <input
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </div>
  );
}

export default Input;
