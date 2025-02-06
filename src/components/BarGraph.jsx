// BarGraph.js
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

const BarGraph = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 7000, 6500, 8000, 7500, 9000],
        backgroundColor: "rgba(37, 99, 235, 0.8)", // Brighter primary blue
      },
      {
        label: "Purchases",
        data: [4000, 6000, 5500, 7000, 6500, 8500],
        backgroundColor: "rgba(37, 99, 235, 0.4)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
    plugins: {
      title: {
        display: true,
        text: "Monthly Revenue Comparison",
        font: { size: 16 },
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="bg-white rounded-md p-4">
      <div className="w-full h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;
