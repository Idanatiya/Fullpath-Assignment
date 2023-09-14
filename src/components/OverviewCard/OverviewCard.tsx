import "./OverviewCard.scss";

type Props = {
  title: string;
  totalNum: number;
  Icon: React.ReactNode;
  children: React.ReactNode;
};
export const OverviewCard = ({ title, totalNum, Icon, children }: Props) => {
  return (
    <div className="card">
      <div className="card-header">
        {Icon}
        <span className="card-title">{title}</span>
      </div>
      <p className="total">{Math.floor(totalNum)}</p>
      <div className="chart-container">{children}</div>
    </div>
  );
};
