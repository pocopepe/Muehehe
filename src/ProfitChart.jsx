import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Function to generate random profit values with variation
const generateRandomProfits = () => {
  let base = 1000;
  return Array.from({ length: 6 }, () => {
    base += Math.floor(Math.random() * 3000) - 1000; // Fluctuates within a range
    return Math.max(base, 500); // Ensure it doesn’t go below 500
  });
};

// Custom Plugin for a Stronger Line Shadow
const shadowPlugin = {
  id: "shadowPlugin",
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    ctx.save();
    
    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);
      if (!meta.hidden) {
        meta.dataset.draw = function () {
          ctx.shadowColor = "rgba(220, 245, 141, 0.9)"; // Stronger green shadow
          ctx.shadowBlur = 20; // More blur for a glow effect
          ctx.shadowOffsetX = 6; // More offset for depth
          ctx.shadowOffsetY = 6;
          LineElement.prototype.draw.apply(this, arguments);
        };
      }
    });

    ctx.restore();
  },
};

const ProfitChart = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [
      {
        label: "Weekly Profit ($)",
        data: generateRandomProfits(), // Generate random values
        borderColor: "#DCF58D", // Green line color
        backgroundColor: "rgba(220, 245, 141, 0.3)", // Light green fill color
        tension: 0.4, // Smooth curve
        pointRadius: 6,
        pointBackgroundColor: "#FAFCF7", // Point color
        pointBorderWidth: 3,
        borderWidth: 4, // Thicker line to emphasize shadow
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Hide legend
      shadowPlugin, // Apply the custom shadow plugin
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, grid: { color: "#E5E5E5" } }, // Lighter grid color
    },
  };

  return <Line data={data} options={options} plugins={[shadowPlugin]} />;
};

export default ProfitChart;
