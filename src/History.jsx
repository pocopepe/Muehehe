import React from 'react';
import styled from 'styled-components';

const CardHistory = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="history-content">
          <h2 className="history-title">Transaction History</h2>

          <ul className="transaction-list">
            <li className="transaction-item">
              <span className="date">Feb 12, 2025</span>
              <span className="description">Purchased 100 Credits</span>
              <span className="amount positive">+100</span>
            </li>
            <li className="transaction-item">
              <span className="date">Feb 10, 2025</span>
              <span className="description">Used for Analysis Tool</span>
              <span className="amount negative">-50</span>
            </li>
            <li className="transaction-item">
              <span className="date">Feb 8, 2025</span>
              <span className="description">Referral Bonus</span>
              <span className="amount positive">+30</span>
            </li>
            <li className="transaction-item">
              <span className="date">Feb 5, 2025</span>
              <span className="description">Subscription Fee</span>
              <span className="amount negative">-20</span>
            </li>
            <li className="transaction-item">
              <span className="date">Feb 1, 2025</span>
              <span className="description">Purchased 50 Credits</span>
              <span className="amount positive">+50</span>
            </li>
          </ul>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  .card {
    width: 80vw;
    background: #FAFCF7; /* Updated background color */
    border-radius: 16px;
    border: 0.5vmin solid #DCF58D;
    box-shadow: 0.4rem 0.4rem #DCF58D;
    color: black; /* Adjusted text color for contrast */
    padding: 16px;
    transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;
  }

  .card:hover {
    box-shadow: 0 8px 24px rgba(220, 245, 141, 0.5);
    transform: translateY(-4px);
  }

  .history-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #000; /* Dark title for contrast */
    text-align: center;
  }

  .transaction-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .transaction-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #DCF58D;
    font-weight: 500;
  }

  .transaction-item:last-child {
    border-bottom: none;
  }

  .date {
    font-size: 0.9rem;
    color: #000; /* Dark date color */
  }

  .description {
    flex-grow: 1;
    text-align: center;
    font-size: 0.9rem;
    color: #333; /* Darker text for readability */
  }

  .amount {
    font-weight: 700;
  }

  .amount.positive {
    color: #DCF58D; /* Updated green for positive values */
  }

  .amount.negative {
    color: #FF605C; /* Red for negative values */
  }
`;

export default CardHistory;
