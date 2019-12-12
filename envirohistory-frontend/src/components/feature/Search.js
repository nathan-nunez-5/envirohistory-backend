import React from 'react';
import Selector from '../Misc/Selectors';
import SearchResult from '../Misc/SearchResult';
import SearchBar from '../Misc/SearchBar';
import MyMapComponent from '../Misc/Map';

import { connect } from 'react-redux';

const Search = ({ results }) => {
  let variables = ['Fire', 'Hurricane', 'Landslide', 'Tornado', 'Flood'];
  let spatialCoverages = [
    'America',
    'Indonesia',
    'Australia',
    'Canada',
    'Germany',
    'Hong Kong',
    'India',
    'Japan',
    'Nigeria'
  ];

  let Cards = [];

  const Items = results.items;
  console.log(Items);
  /* Search cards */
  if (Items !== undefined) {
    Items.forEach((item) => {
      Cards.push(<SearchResult result={item} />);
    });
  }

  /* Search cards */
  return (
    <div className="row">
      <div id="side-bar" className="col-lg-3 col-md-12 col-sm-12">
        {/* Variable */}
        <Selector title="Variables" optionNames={variables} />
        <hr></hr>

        {/* Spatial Coverage */}
        <MyMapComponent
          id="map-one"
          isMarkerShown={true}
          onMarkerClick={false}
        />

        <br></br>
        <Selector title="Spatial Coverage" optionNames={spatialCoverages} />
        <hr></hr>
      </div>

      <div id="results" className="col-lg-9 col-md-12">
        <SearchBar />
        {/* Card 1 */}
        {Cards}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    results: state.search.results
  };
};

export default connect(mapStateToProps)(Search);
