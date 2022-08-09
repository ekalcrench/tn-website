export const initialFormState = {
  plantCode: "",
  plantName: "",
};

export const validate = (values) => {
  let errors = {};
  if (!values.plantCode) {
    errors.plantCode = "Required";
  }
  if (!values.plantName) {
    errors.plantName = "Required";
  }
  return errors;
};
