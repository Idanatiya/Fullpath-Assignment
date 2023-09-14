import { ChangeEvent, useMemo, useState } from "react";
import type { WebsiteMetric } from "../../types";
import "./MetricList.scss";
import { FaSearch } from "react-icons/fa";

type Props = {
  metrics: WebsiteMetric[];
};
export const MetricList = ({ metrics }: Props) => {
  const [term, setTerm] = useState("");
  const metricsToShow = useMemo(() => {
    if (!term) return metrics;

    return metrics.filter((metric) => {
      const { conversions, clicks, cost, impressions } = metric;
      return [conversions, clicks, cost, impressions].some((item) =>
        item.toString().includes(term)
      );
    });
  }, [term, metrics]);

  const onChangeTerm = (ev: ChangeEvent<HTMLInputElement>) => {
    const inputValue = ev.target.value;
    if (Number.isNaN(inputValue)) {
      setTerm("");
      return;
    }
    setTerm(inputValue);
  };

  return (
    <div>
      <h1>Metrics</h1>
      <div className="metric-input-container">
        <FaSearch />
        <input
          className="metric-input"
          type="number"
          placeholder="Search Metrics"
          value={term}
          onChange={onChangeTerm}
        />
      </div>

      {metricsToShow.length > 0 ? (
        <div className="metric-list">
          {metricsToShow.map(
            ({ clicks, conversions, cost, impressions, timestamp }, idx) => (
              <div key={timestamp} className="metric-item">
                <p className="metric-number">Metric #{idx + 1}</p>
                <p>
                  Clicks: <span className="click">{clicks}</span>
                </p>
                <p>
                  Conversions:
                  <span className="conversions">{conversions}</span>
                </p>
                <p>
                  Impressions:{" "}
                  <span className="impressions">{impressions}</span>
                </p>
                <p>
                  Cost:<span className="cost">{cost}$</span>
                </p>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="no-result">💩 There are no results 💩</div>
      )}
    </div>
  );
};
