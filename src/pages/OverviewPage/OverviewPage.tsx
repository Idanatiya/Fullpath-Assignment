import "./OverviewPage.scss";
import mockData from "../../sample.json";
import { OverviewCard } from "../../components/OverviewCard/OverviewCard";
import { FaMouse, FaEye, FaCoins, FaRecycle } from "react-icons/fa";
import { LineChart } from "../../components/LineChart/LineChart";
import { MetricList } from "../../components/MetricList/MetricList";
import { useNormalizeData } from "../../hooks";

export const OverviewPage = () => {
  const { totalData, chartsData, labels } = useNormalizeData(mockData.data);
  return (
    <main className="main-content">
      <OverviewCard
        title="Total clicks"
        Icon={<FaMouse />}
        totalNum={totalData.clicks}
      >
        <LineChart
          data={{
            labels,
            datasets: [
              {
                label: "Clicks",
                data: chartsData.clicks,
                borderColor: "#6672fb",
                backgroundColor: "#6672fb",
              },
            ],
          }}
        />
      </OverviewCard>
      <OverviewCard
        title="Total impressions"
        Icon={<FaEye />}
        totalNum={totalData.impressions}
      >
        <LineChart
          data={{
            labels,
            datasets: [
              {
                label: "Impressions",
                data: chartsData.impressions,
                borderColor: "#fbac57",
                backgroundColor: "#fbac57",
              },
            ],
          }}
        />
      </OverviewCard>
      <OverviewCard
        title="Total cost"
        Icon={<FaCoins />}
        totalNum={totalData.cost}
      >
        <LineChart
          data={{
            labels,
            datasets: [
              {
                label: "Cost",
                data: chartsData.cost,
                borderColor: "#24cc91",
                backgroundColor: "#24cc91",
              },
            ],
          }}
        />
      </OverviewCard>
      <OverviewCard
        title="Total conversions"
        Icon={<FaRecycle />}
        totalNum={totalData.conversions}
      >
        <LineChart
          data={{
            labels,
            datasets: [
              {
                label: "Conversions",
                data: chartsData.conversions,
                borderColor: "#da71f2",
                backgroundColor: "#da71f2",
              },
            ],
          }}
        />
      </OverviewCard>
      <div className="card">
        <MetricList metrics={mockData.data} />
      </div>
    </main>
  );
};
