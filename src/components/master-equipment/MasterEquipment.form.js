export const initialFormState = {
  UnitCode: "",
  UnitModel: "",
  SerialNumber: "",
  PlantCode: "",
  CustomerName: "",

  ModelNumber: "",
  MaterialNumber: "",
  MaterialGroup: "",
  EquipmentCategory: "",
  UnitCodeDesc: "",
  OperationStatus: "",
  UnitDescription: "",
  CustomerCode: "",
  CustomerGroup: "",
  CustomerGroupName: "",
  PlantDescription: "",
  WorkCenterCode: "",
  WorkCenterDescription: "",
  BrandCode: "",
  EngineModel: "",
  EngineSerialNumber: "",
  Industry: "",
  ABCIndustry: "",
  ObjectType: "",
  MasterWarranty: "",
};

export const validate = (values) => {
  let errors = {};
  if (!values.UnitCode) {
    errors.UnitCode = "Required";
  }
  if (!values.UnitModel) {
    errors.UnitModel = "Required";
  }
  if (!values.SerialNumber) {
    errors.SerialNumber = "Required";
  } else if (isNaN(values.SerialNumber)) {
    errors.SerialNumber = "Invalid serial number";
  }
  if (!values.PlantCode) {
    errors.PlantCode = "Required";
  }
  if (!values.CustomerName) {
    errors.CustomerName = "Required";
  }
  return errors;
};
