import React from 'react';
import Select from '../../components/Select/Select';
import './Search.css';

export const Row = ({ children, className }) => (
  <div className={`clearfix ${className}`}>{children}</div>
);
export const Col = ({ children, className }) => (
  <div className={`sm-col sm-col-6 Search__Col ${className}`}>{children}</div>
);

const Search = ({
  handleMakesChange,
  handleModelsChange,
  handleClick,
  makes = [],
  models = [],
  hasSelectedMakeId,
  hasSelectedModelId
}) => (
  <Row className={'Search'}>
    <Row>
      <Col>
        <Select
          options={makes}
          handleOnChange={handleMakesChange}
          placeholder={'Choose make'}
        />
      </Col>
      <Col>
        <Select
          options={models}
          handleOnChange={handleModelsChange}
          placeholder={'Choose model'}
          disabled={hasSelectedMakeId === false}
        />
      </Col>
    </Row>
    <Row>
      <Col className={'sm-col-12'}>
        <button
          onClick={handleClick}
          className={'Search__Button right'}
          disabled={hasSelectedModelId === false}
        >
          Search
        </button>
      </Col>
    </Row>
  </Row>
);

export default Search;
