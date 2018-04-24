import React from 'react';
import './Select.css';

const Select = ({
  options,
  handleOnChange,
  placeholder = '',
  className = ''
}) => (
  <select onChange={handleOnChange} className={`Select ${className}`}>
    <option value="">{placeholder}</option>
    {options.map(({ id, name }) => (
      <option value={id} key={id}>
        {name}
      </option>
    ))}
  </select>
);

export default Select;
