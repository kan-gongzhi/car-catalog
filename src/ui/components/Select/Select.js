import React from 'react';
import './Select.css';

const Select = ({
  options=[],
  handleOnChange,
  placeholder = '',
  className = '',
  disabled
}) => (
  <select
    onChange={handleOnChange}
    className={`Select ${className}`}
    disabled={disabled}
  >
    <option value="">{placeholder}</option>
    {options.map(({ id, name }) => (
      <option value={id} key={id}>
        {name}
      </option>
    ))}
  </select>
);

export default Select;
