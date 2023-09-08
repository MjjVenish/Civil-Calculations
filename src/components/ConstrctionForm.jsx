import { Formik, Form, Field } from "formik";
import { useState } from "react";

const ConstrctionForm = ({ calculation }) => {
  const [initialValues, setInitialValues] = useState({
    builtup_area: 1000,
    approx_cost: 1000,
  });
  const handleSubmit = (values) => {
    console.log(values);
    calculation(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formik) => (
        <Form className="form-cal">
          <h3>CONSTRUCTION COST ESTIMATOR</h3>
          <div className="form-label">
            <label htmlFor="builtup_Area">Builtup Area</label>
            <br />
            <Field type="number" name="builtup_area" id="builtup_Area" />
            <span>
              ft <sup>2</sup>
            </span>
          </div>
          <div className="form-label">
            <label htmlFor="approx_cost">Approx Cost (Per Square Feet)</label>
            <br />
            <Field type="number" name="approx_cost" id="approx_cost" />
            <span>Rs.</span>
          </div>
          <div className="flex just-end">
            <input className="butt but-sub" type="submit" value={"Calculate"} />
            <input
              className="butt but-res"
              type="reset"
              value={"Reset"}
              onClick={() => {
                setInitialValues({
                  builtup_area: 0,
                  approx_cost: 0,
                });
                calculation(initialValues);
              }}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ConstrctionForm;
