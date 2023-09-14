export type WebsiteMetric = {
  clicks: number;
  conversions: number;
  cost: number;
  impressions: number;
  timestamp: string;
};

export type Metric = Exclude<keyof WebsiteMetric, "timestamp">;
export type ChartData = Record<Metric, number[]>;
export type Dataset = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
};
