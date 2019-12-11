import React from 'react';

const InfoCard = (props) => {
  return (
    <div className="info-card">
      <p>${props.content}</p>
    </div>
  );
};

export default InfoCard;
