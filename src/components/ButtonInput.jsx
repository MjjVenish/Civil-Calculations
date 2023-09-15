import { PropTypes } from "prop-types";
import { useChart } from "../utils/hooks/userContext";

const ButtonInput = ({
  type,
  className,
  value,
  setInitialValues,
  initialValues,
  calculation,
}) => {
  //   const { barCharts } = useChart();
  return (
    <input
      type={type}
      value={value}
      className={className}
      onClick={() => {
        calculation(initialValues);
        setInitialValues(initialValues);
        // barCharts(initialValues);
      }}
    />
  );
};
ButtonInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
};

export default ButtonInput;
