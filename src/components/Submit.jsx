import React from "react";
import { useChart } from "../utils/hooks/userContext";

const Submit = ({ setInitialValues, initialValues, calculation }) => {
  const { barCharts } = useChart();
  return (
    <div className="flex just-end">
      <input className="butt but-sub" type="submit" value={"Calculate"} />
      <input
        className="butt but-res"
        type="reset"
        value={"Reset"}
        onClick={() => {
          calculation(initialValues);
          setInitialValues(initialValues);
          barCharts(initialValues);
        }}
      />
    </div>
  );
};

export default Submit;
