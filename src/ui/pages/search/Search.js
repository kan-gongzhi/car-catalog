import React from 'react';
import Select from '../../components/Select/Select';

const Search = ({
  handleMakesChange,
  handleModelsChange,
  handleClick,
  makes = [],
  models = []
}) => (
  <div>
    <Select options={makes} handleOnChange={handleMakesChange} />
    <Select options={models} handleOnChange={handleModelsChange} />
    <button onClick={handleClick}>Search</button>
  </div>
);

export default Search;
