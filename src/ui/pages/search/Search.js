import React from 'react';
import Select from '../../components/Select/Select';
import './Search.css';

const Search = ({
  handleMakesChange,
  handleModelsChange,
  handleClick,
  makes = [],
  models = [],
  hasSelectedMakeId
}) => (
  <div>
    <Select
      options={makes}
      handleOnChange={handleMakesChange}
      placeholder={'Choose make'}
    />
    <Select
      options={models}
      handleOnChange={handleModelsChange}
      placeholder={'Choose model'}
    />
    <button onClick={handleClick} className={'Search__Button'} disabled={true}>
      Search
    </button>
  </div>
);

export default Search;
