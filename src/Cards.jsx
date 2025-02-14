import React from 'react';
import styled from 'styled-components';

const Card = ({ title, value, description, highlightColor, icon }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="tools">
          <div className="circle"><span className="red box" /></div>
          <div className="circle"><span className="yellow box" /></div>
          <div className="circle"><span className="green box" /></div>
        </div>
        <div className="card__content">
          {icon && <img src={icon} alt="icon" className="card-icon" />} 
          <h1 className="title" style={{ color: highlightColor }}>{title}: {value}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center; /* Center the card */
  padding: 16px;

  .card {
    width: 40vw; /* Increased width */
    height: 40vh; /* Increased height */
    background-color: #FAFCF7; /* Updated background to off-white */
    border-radius: 16px;
    color: #011522; /* Text color remains dark for contrast */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensures spacing inside the card */
    align-items: flex-start;
    padding: 24px;
    transition: box-shadow 0.3s ease-in-out;
    overflow: hidden;
  }

  .card:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for off-white background */
    transform: scale(1.05);
  }

  .tools {
    display: flex;
    justify-content: flex-start; /* Align circles to the left */
    align-items: center;
  }

  .circle {
    padding: 0 2px; /* Reduced padding between circles */
  }

  .box {
    display: inline-block;
    width: 12px; /* Slightly bigger circle */
    height: 12px; /* Slightly bigger circle */
    border-radius: 50%;
  }

  .red { background-color: #ff605c; }
  .yellow { background-color: #ffbd44; }
  .green { background-color: #DCF58D; } /* Updated green color */

  .card-icon {
    width: 60px; /* Adjust the size */
    height: 60px;
   
    margin-bottom: 5px; /* Reduced space between icon and text */
  }

  .title {
    font-size: 40px;
    font-weight: bold;
    text-align: left;
  } 

  .description {
    font-size: 20px;
    margin-top: 10px;
    text-align: left;
  }
`;

export default Card;