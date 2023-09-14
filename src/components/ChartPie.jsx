import { VictoryPie } from "victory-pie";

const ChartPie = ({ mydata }) => {
  return (
    <VictoryPie
      data={mydata}
      colorScale={["blue", "red", "yellow", "red", "grey", "green"]}
      radius={100}
    />
  );
};

export default ChartPie;
