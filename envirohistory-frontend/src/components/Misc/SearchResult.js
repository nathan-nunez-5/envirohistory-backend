import React from 'react';

const searchResult = ({ result }) => {
  return (
    <div className="card result-card">
      <h5 class="card-header">Featured</h5>
      <div class="card-body">
        <h5 class="card-title">{result.title}</h5>
        <small>{result.year}</small>
        <p class="card-text">{result.snippet}</p>
        <a href={result.link} class="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default searchResult;
