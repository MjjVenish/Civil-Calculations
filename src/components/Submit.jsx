import React from "react";

import ButtonInput from "./ButtonInput";

const Submit = ({ setInitialValues, initialValues, calculation }) => {
  return (
    <div className="flex just-end">
      <ButtonInput
        className={"butt but-sub"}
        value={"Calculate"}
        type={"submit"}
      />
      <ButtonInput
        className={"butt but-res"}
        value={"Reset"}
        type={"reset"}
        setInitialValues={setInitialValues}
        initialValues={initialValues}
        calculation={calculation}
      />
    </div>
  );
};

export default Submit;
