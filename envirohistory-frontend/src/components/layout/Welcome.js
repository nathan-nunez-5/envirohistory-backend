import React, { useEffect } from 'react';
import TodayEvent from '../Misc/TodayEvent';

import { connect } from 'react-redux';
import { getTodaysInfo } from '../../actions/search';

const sizes = ['medium', 'medium', 'medium', 'small', 'tall', 'wide'];

const imagesDict = [
  {
    Flood: {
      img:
        'https://images.unsplash.com/reserve/z7R1rjT6RhmZdqWbM5hg_R0001139.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&q=80'
    },
    Landslide: {
      img:
        'https://images.unsplash.com/photo-1570636801511-cc0b0e416f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    Tornado: {
      img:
        'https://images.unsplash.com/photo-1552065475-454505176015?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2087&q=80'
    },
    Snow: {
      img:
        'https://images.unsplash.com/photo-1488818138649-d2734488e6d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80'
    },
    'Dam/Levee Break': {
      img:
        'https://static01.nyt.com/images/2019/05/31/opinion/31Horowitz/merlin_133476303_a3176451-5e81-4e36-a8df-123545140cbc-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    },
    Other: {
      img:
        'https://images.unsplash.com/photo-1565282604648-a13c5f19fd61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }
  }
];

const Welcome = ({ getTodaysInfo, results }) => {
  useEffect(() => {
    getTodaysInfo();
  }, [getTodaysInfo]);

  console.log('Results:', results);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const todaysDate = new Date();

  let events = [];
  let count = 0;

  console.log('Length: ', results.length);
  let i = 0;
  while (i < results.length) {
    let item = results[i];
    if (count === 1) {
      events.push(
        <div className="portfolio-item large two">
          <div>
            <h3 className="main-title">EnviroHistory</h3>
            <small className="main-question">What happened on...</small>
            <h1 className="date-lg">
              {monthNames[todaysDate.getMonth()]} {todaysDate.getDate()}
            </h1>
          </div>
        </div>
      );
    } else {
      console.log('Images: ', imagesDict[0][item.incidentType]);
      events.push(
        <TodayEvent
          key={i}
          backgroundImage={
            imagesDict[0][item.incidentType] !== undefined
              ? imagesDict[0][item.incidentType].img
              : imagesDict[0]['Landslide'].img
          }
          title={item.incidentType}
          description={item.declarationTitle}
          size={sizes[count]}
        />
      );
      i += 1;
    }
    count += 1;
  }

  return (
    <div className="container-fluid">
      <div className="main-content">
        <div className="portfolio">{events}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  results: state.search.results
});

export default connect(
  mapStateToProps,
  { getTodaysInfo }
)(Welcome);
