import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataset,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

type Props = {
  data: {
    labels: string[];
    datasets: ChartDataset<"line">[];
  };
};

export const LineChart = ({ data }: Props) => {
  return (
    <Line
      options={options}
      data={data}
      style={{ height: "auto", width: "100%" }}
    />
  );
};
