import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

const ChartPie = ({ amount }) => {
  const {
    cementAmount,
    sandAmount,
    aggregateAmount,
    steelAmount,
    finishers,
    fittings,
  } = amount;
  const myData = [
    { x: `Cement,16.4%${cementAmount}Rs`, y: cementAmount },
    { x: "Sand,12.3%", y: sandAmount },
    { x: "Aggregate,7.4%", y: aggregateAmount },
    { x: "Steel,24.6%", y: steelAmount },
    { x: "Finisher,16.5%", y: finishers },
    { x: "Fittngs,22.8%", y: fittings },
  ];
  return (
    <div className="">
      <h1>Pie chart</h1>
      <ResponsiveContainer>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="y"
            data={myData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#344243"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPie;
