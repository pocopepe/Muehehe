import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <div className="card-container">
        <div className="card">
          <Cards />
        </div>
        <div className="card">
          <Cards />
        </div>
      </div>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: #f4f4f4; /* Light background for contrast */

  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Space between cards */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
  }

  .card {
    flex: 0 1 300px; /* Set fixed width for consistency */
    height: 200px; /* Fixed height */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
`;

export default Dashboard;
