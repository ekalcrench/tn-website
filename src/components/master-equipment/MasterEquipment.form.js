export const initialFormState = {
  unitCode: "",
  unitModel: "",
  serialNumber: "",
  plantCode: "",
  customerName: "",

  modelNumber: "",
  materialNumber: "",
  materialGroup: "",
  equipmentNumber: "",
  equipmentCategory: "",
  unitCodeDesc: "",
  operationStatus: 0,
  unitDescription: "",
  customerCode: "",
  customerGroup: "",
  customerGroupName: "",
  plantDesc: "",
  workCenterCode: "",
  workCenterDesc: "",
  brandCode: "",
  engineModel: "",
  engineSerialNumber: "",
  industry: "",
  abcInd: "",
  objectType: "",
  masterWarranty: "",
  warrantyStartDate: null,
  warrantyEndDate: null,
  warratyType: "",
  startTransmitted: null,
  lastTransmitted: null,
  lastOperationDate: null,
  transmittedLatitude: "",
  transmittedLongitude: "",
  transmittedPlantCode: "",
  transmittedPlantKabupaten: "",
  transmittedPlantZIPCode: "",
  fuelConsumptionPerDay: 0,
  smrValuePerDayInMinutes: 0,
  smrTotalInMinutes: 0,
  smrlAstValueDate: null,
  uom: "",
  isInterBranchStatus: true,
  interBranchDate: "",
  isPendingCommisioning: true,
  commisioningStatus: 0,
  cautionCounter: "",
  lastDODate: null,
  lastMaterialNumber: "",
  deliveryDate: null,
  lastLocationDate: null,
  transmitStatus: "",
  measuringPoint: "",
  measuringDocument: "",
  manufacturePartNumber: "",
  manufactureSerialNumber: "",
  systemStatus: "",
  unitStatus: "",
  komtraxMeterReading: "",
  komtraxMeterReadingDate: 0,
  contractPackage: "",
  isAvailable: true,
  isActive: true,
};

export const validate = (values) => {
  let errors = {};
  if (!values.unitCode) {
    errors.unitCode = "Required";
  }
  if (!values.unitModel) {
    errors.unitModel = "Required";
  }
  if (!values.serialNumber) {
    errors.serialNumber = "Required";
  } else if (isNaN(values.serialNumber)) {
    errors.serialNumber = "Invalid serial number";
  }
  if (!values.plantCode) {
    errors.plantCode = "Required";
  }
  if (!values.customerName) {
    errors.customerName = "Required";
  }
  return errors;
};
