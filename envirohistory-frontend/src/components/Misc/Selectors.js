import React, { useState } from 'react';
import { connect } from 'react-redux';

import { submitSearch } from '../../actions/search';

const Selectors = ({ optionNames, title, submitSearch }) => {
  let options = [];

  const [searchInformation, setSearchInformation] = useState({
    searchQuery: ''
  });

  const { searchQuery } = searchInformation;

  const onChange = (e) => {
    setSearchInformation({
      ...searchQuery,
      [e.target.name]: e.target.value
    });

    let val = optionNames[e.target.value];
    submitSearch({ searchQuery: val });
  };

  optionNames.forEach((item, index) => {
    options.push(<option value={index}>{item}</option>);
  });

  return (
    <div>
      <h3>{title}</h3>
      <select
        class="custom-select"
        id="inputGroupSelect01"
        name="searchQuery"
        value={searchQuery}
        onChange={(e) => onChange(e)}
      >
        <option selected>Select... </option>
        {options}
      </select>
    </div>
  );
};

export default connect(
  null,
  { submitSearch }
)(Selectors);
