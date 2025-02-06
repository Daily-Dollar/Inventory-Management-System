// PieChart.js
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  // Bright, saturated colors for each product
  const data = {
    labels: ["Cap", "T-Shirt", "Hat", "Watch", "Jacket"],
    datasets: [
      {
        label: "Sales",
        data: [200, 150, 100, 50, 80],
        backgroundColor: [
          "#FF6B81", // Cap – bright pinkish red
          "#42A5F5", // T-Shirt – bright blue
          "#FFEB3B", // Hat – bright yellow
          "#4DD0E1", // Watch – bright turquoise
          "#AB47BC", // Jacket – bright purple
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: 0.1, // Slight rotation for extra imperfection
    plugins: {
      title: {
        display: true,
        text: "Product Sales Distribution",
        font: { size: 16 },
      },
      legend: {
        position: "right",
      },
    },
  };

  return (
    // The outer container has a white background, shadow, and padding.
    // We also apply a slight transform to the inner container to simulate an imperfect circle.
    <div className="bg-white rounded-md p-4">
      <div className="w-full h-80" style={{ transform: "rotate(2deg) scaleX(0.98)" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
