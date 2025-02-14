import React from 'react';
import styled from 'styled-components';
import DashboardIcon from './icons/dashboard.svg';
import MarketIcon from './icons/market.svg';

const NavBar = () => {
  return (
    <StyledWrapper>
      <div className="button-container">
        <button className="button">
          <img src={DashboardIcon} alt="Dashboard" className="icon" />
          <span className="text">Dashboard</span>
        </button>
        <button className="button">
          <img src={MarketIcon} alt="Market" className="icon" />
          <span className="text">Market</span>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start; /* Align to the left */
  align-items: center;
  background-color:transparent;
  z-index: 1000;
  padding: 10px 20px; /* Adjusted padding */

  .button-container {
    display: flex;
    gap: 10px;
  }

  .button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    border-radius: 8px;
    background-color: black;
    color: #DCF58D;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .button:hover {
    transform: translateY(-3px);
    background-color: #c5e676;
  }

  .icon {
    width: 24px;
    height: 24px;
     filter: brightness(0) invert(1);
  }

  .text {
    text-align: left;
  }
`;

export default NavBar;
