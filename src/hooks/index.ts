import type { WebsiteMetric, Metric } from "../types";
import { formatTimestamp } from "../utils";

export type NormalizedData = {
  labels: string[];
  chartsData: Record<Metric, number[]>;
  totalData: Record<Metric, number>;
};

export const initialState = {
  labels: [],
  totalData: {
    clicks: 0,
    conversions: 0,
    cost: 0,
    impressions: 0,
  },
  chartsData: {
    clicks: [],
    conversions: [],
    cost: [],
    impressions: [],
  },
};

export const useNormalizeData = (mockData: WebsiteMetric[]) => {
  const normalizedData = mockData.reduce<NormalizedData>((acc, item) => {
    const { timestamp, ...rest } = item;
    const metricKeys = Object.keys(rest) as Metric[];
    acc.labels.push(formatTimestamp(timestamp));
    metricKeys.forEach((key) => {
      acc.chartsData[key].push(item[key]);
      acc.totalData[key] = (acc.totalData[key] ?? 0) + item[key];
    });
    return acc;
  }, initialState);
  return normalizedData;
};
