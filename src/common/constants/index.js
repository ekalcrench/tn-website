export const Menu = {
  HOME: "/",
};

export const Component_Name = {
  GENSET_MONITORING: "Genset Monitoring",
  MASTER_CUSTOMER: "Master Customer",
  MASTER_EQUIPMENT: "Master Equipment",
  TN_LOCATION: "TN Location",
};

export const ADD_CUSTOMER_FORM = {
  CUSTOMER_CODE: "CUSTOMER CODE",
  CUSTOMER_NAME: "CUSTOMER NAME",
  ADDRESS: "ADDRESS",
  CITY: "CITY",
  ZIP_CODE: "ZIP CODE",
  COUNTRY: "COUNTRY",
  CONTACT_PERSON_NAME: "CONTACT PERSON NAME",
  CONTACT_PERSON_EMAIL: "CONTACT PERSON EMAIL",
  PHONE_NUMBER: "PHONE NUMBER",
  FAX_NUMBER: "FAX NUMBER",
  REMARK: "REMARK",
};

export const ADD_EQUIPMENT_FORM = {
  MODEL_NUMBER: "MODEL NUMBER",
  UNIT_MODEL: "UNIT MODEL",
  SERIAL_NUMBER: "SERIAL NUMBER",
  MATERIAL_NUMBER: "MATERIAL NUMBER",
  MATERIAL_GROUP: "MATERIAL GROUP",
  EQUIPMENT_NUMBER: "EQUIPMENT NUMBER",
  EQUIPMENT_CATEGORY: "EQUIPMENT CATEGORY",
  UNIT_CODE: "UNIT CODE",
  UNIT_CODE_DESC: "UNIT CODE DESCRIPTION",
  OPERATION_STATUS: "OPERATION STATUS",
  UNIT_DESCRIPTION: "UNIT DESCRIPTION",
  CUSTOMER_CODE: "CUSTOMER CODE",
  CUSTOMER_GROUP: "CUSTOMER GROUP",
  CUSTOMER_NAME: "CUSTOMER NAME",
  CUSTOMER_GROUP_NAME: "CUSTOMER GROUP NAME",
  PLANT_CODE: "PLANT CODE",
  PLANT_DESC: "PLANT DESCRIPTION",
  WORK_CENTER_CODE: "WORK CENTER CODE",
  WORK_CENTER_DESC: "WORK CENTER DESCRIPTION",
  BRAND_CODE: "BRAND CODE",
  ENGINE_MODEL: "ENGINE MODEL",
  ENGINE_SERIAL_NUMBER: "ENGINE SERIAL NUMBER",
  INDUSTRY: "INDUSTRY",
  ABC_IND: "ABC INDUSTRY",
  OBJECT_TYPE: "OBJECT TYPE",
  MASTER_WARRANTY: "MASTER WARRANTY",
  WARRANTY_START_DATE: "WARRANTY START DATE",
  WARRANTY_END_DATE: "WARRANTY END DATE",
  WARRANTY_TYPE: "WARRANTY TYPE",
  START_TRANSMITTED: "START TRANSMITTED",
  LAST_TRANSMITTED: "LAST TRANSMITTED",
  LAST_OPERATION_DATE: "LAST OPERATION DATE",
  TRANSMITTED_LATITUDE: "TRANSMITTED LATITUDE",
  TRANSMITTED_LONGITUDE: "TRANSMITTED LONGITUDE",
  TRANSMITTED_PLANT_CODE: "TRANSMITTED PLANT CODE",
  TRANSMITTED_PLANT_KABUPATEN: "TRANSMITTED PLANT KABUPATEN",
  TRANSMITTED_PLANT_ZIP_CODE: "TRANSMITTED PLANT ZIP CODE",
  FUEL_CONSUMPTION_PER_DAY: "FUEL CONSUMPTION PER DAY",
  SMR_VALUE_PER_DAY_IN_MINUTES: "SMR VALUE PER DAY IN MINUTES",
  SMR_TOTAL_IN_MINUTES: "SMR TOTAL IN MINUTES",
  SMR_LAST_VALUE_DATE: "SMR LAST VALUE DATE",
  UOM: "UOM",
  IS_INTER_BRANCH_STATUS: "IS INTER BRANCH STATUS",
  INTER_BRANCH_DATE: "INTER BRANCH DATE",
  IS_PENDING_COMMISION: "IS PENDING COMMISION",
  COMMISIONING_STATUS: "COMMISIONING STATUS",
  CAUTION_COUNTER: "CAUTION COUNTER",
  LAST_DO_DATE: "LAST DO DATE",
  LAST_MATERIAL_DATE: "LAST MATERIAL DATE",
  DERLIVERY_DATE: "DERLIVERY DATE",
  LAST_LOCATION_DATE: "LAST LOCATION DATE",
  TRANSMIT_STATUS: "TRANSMIT STATUS",
  MEASURING_POINT: "MEASURING POINT",
  MEASURING_DOCUMENT: "MEASURING DOCUMENT",
  MANUFACTURE_PART_NUMBER: "MANUFACTURE PART NUMBER",
  MANUFACTURE_SERIAL_NUMBER: "MANUFACTURE SERIAL NUMBER",
  SYSTEM_STATUS: "SYSTEM STATUS",
  UNIT_STATUS: "UNIT STATUS",
  KOMTRAX_METER_READING: "KOMTRAX METER READING",
  KOMTRAX_METER_READING_DATE: "KOMTRAX METER READING DATE",
  CONTRACT_PACKAGE: "CONTRACT PACKAGE",
  IS_AVAILABLE: "IS AVAILABLE",
  IS_ACTIVE: "IS ACTIVE",
};

export const ADD_TN_LOCATION_FORM = {
  PLANT_CODE: "PLANT CODE",
  PLANT_NAME: "PLANT NAME",
};

export const API = {
  MASTER_CUSTOMER: "http://localhost:3003/MasterCustomer",
  MASTER_EQUIPMENT: "http://localhost:3003/MasterEquipment",
  CUSTOMER: "https://localhost:7261/api/Customer",
  CUSTOMER_ALL: "https://localhost:7261/api/Customer/all",
  CUSTOMER_FILTER: "https://localhost:7261/api/Customer/filter?",
  CUSTOMER_PAGGING: "https://localhost:7261/api/Customer/filterpage?",
  EQUIPMENT: "https://localhost:7261/api/MasterEquipment",
  EQUIPMENT_FILTER: "https://localhost:7261/api/MasterEquipment/filter?",
  LOCATION: "https://localhost:7261/api/TNLocation",
  LOCATION_PAGGING: "https://localhost:7261/api/TNLocation/filterpage?",
  GENSET_DASHBOARD:
    "https://localhost:7261/api/Genset?EquipmentId=f51cdfa2-a524-466b-8607-5cd3b0b3cf29",
};
