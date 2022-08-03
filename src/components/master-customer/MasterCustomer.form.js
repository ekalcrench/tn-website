export const initialFormState = {
  custCode: "",
  customerName: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
  cpName: "",
  cpEmail: "",
  phoneNumber: "",
  fax: "",
  remark: "",
};

export const initialEditFormState = (data) => {
  const formState = {
    custCode: "",
    customerName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    cpName: "",
    cpEmail: "",
    phoneNumber: "",
    fax: "",
    remark: "",
  };
  return formState;
};

export const validate = (values) => {
  //   console.log(values);
  let errors = {};
  if (!values.custCode) {
    errors.custCode = "Required";
  }
  if (!values.customerName) {
    errors.customerName = "Required";
  }
  if (!values.address) {
    errors.address = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.zipCode) {
    errors.zipCode = "Required";
  } else if (isNaN(values.zipCode)) {
    errors.zipCode = "Invalid zip code";
  }
  if (!values.country) {
    errors.country = "Required";
  }
  if (!values.cpName) {
    errors.cpName = "Required";
  }
  if (!values.cpEmail) {
    errors.cpEmail = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.cpEmail)) {
    errors.cpEmail = "Invalid email address";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (isNaN(values.phoneNumber)) {
    errors.phoneNumber = "Invalid phone number";
  }
  if (!values.fax) {
    errors.fax = "Required";
  } else if (isNaN(values.fax)) {
    errors.fax = "Invalid fax number";
  }
  if (!values.remark) {
    errors.remark = "Required";
  }
  return errors;
};
