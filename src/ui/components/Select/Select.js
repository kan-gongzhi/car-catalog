import React from 'react';

const Select = ({ options, handleOnChange }) => (
  <select onChange={handleOnChange}>
    <option value="">{''}</option>
    {options.map(({ id, name }) => (
      <option value={id} key={id}>
        {name}
      </option>
    ))}
  </select>
);

export default Select;
