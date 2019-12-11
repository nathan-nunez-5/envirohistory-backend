import React from 'react';

const TodayEvent = ({ backgroundImage, title, description, size }) => {
  const classes = `portfolio-item ${size}`;
  console.log(classes);
  return (
    <div
      className={classes}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="today-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TodayEvent;
