import React from 'react';
import styled from 'styled-components';

const MarketBuyHistory = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <h2 className="title">Buy Orders</h2>
        <div className="history">
          <div className="order">
            <span className="quantity">100 Credits</span>
            <span className="price">$500</span>
          </div>
          <div className="order">
            <span className="quantity">250 Credits</span>
            <span className="price">$490</span>
          </div>
          <div className="order">
            <span className="quantity">50 Credits</span>
            <span className="price">$505</span>
          </div>
          <div className="order">
            <span className="quantity">75 Credits</span>
            <span className="price">$495</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const MarketSellHistory = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <h2 className="title">Sell Orders</h2>
        <div className="history">
          <div className="order">
            <span className="quantity">200 Credits</span>
            <span className="price">$520</span>
          </div>
          <div className="order">
            <span className="quantity">100 Credits</span>
            <span className="price">$530</span>
          </div>
          <div className="order">
            <span className="quantity">150 Credits</span>
            <span className="price">$515</span>
          </div>
          <div className="order">
            <span className="quantity">50 Credits</span>
            <span className="price">$525</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  .card {
    width: 45vw;
    height: 80vh;
    background: #FAFCF7; /* Updated background color */
    border-radius: 16px;
    padding: 20px;
    color: black; /* Adjusted text color for contrast */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
    color: #DCF58D; /* Updated green color */
  }

  .history {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .order {
    display: flex;
    justify-content: space-between;
    background: rgba(220, 245, 141, 0.3); /* Updated green tint */
    padding: 12px;
    border-radius: 8px;
    color: black; /* Adjusted for readability */
  }

  .quantity {
    font-size: 1.1rem;
    font-weight: 600;
  }

  .price {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export { MarketBuyHistory, MarketSellHistory };
