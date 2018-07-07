import { PurchaseRegisterDetails } from '../beans/purchase-register-details';
//import {VEHICLE_DETAILS} from '../mockData/vehicleDetailsResponse';
import { VehicleDetails } from '../beans/vehicle-details';
import {ProductType} from  '../beans/product-type';

export const PURCHASE_DETAILS: PurchaseRegisterDetails[] =[
    {
    "id": 1,
    "sno": "1",
    "vehicleDetails": {
      "id": 1,
      "vehicleNo": "TS 05 AB 1234",
      "weightSlip": "1",
      "emptyWeight": 100,
      "loadWeight": 150,
      "tareWeight": 50,
      "createdDate": "2018-06-30",
      "updatedDate": "2018-06-30",
      "retired": false
    },
    "aasamiName": "srikanth",
    "brokerName": "vishnu",
    "productType": {
      "type": "Paddy",
      "retired": true
    },
    "bagsCount": 100,
    "quantity": 50,
    "quantityUnit": "Quintals",
    "pricePerQuintals": 1500,
    "purchaseAdjustments": {
      "id": 1,
      "bagsCost": 10,
      "weightBridgeCost": 100,
      "kulli": 200,
      "miscCost": 200,
      "labourCost": 1000
    },
    "finalSettlement": 75000,
    "status": "Purchased",
    "createdDate": "2018-06-30",
    "updatedDate": "2018-06-30",
    "retired": false
  },
  {
    "id": 2,
    "sno": "1",
    "vehicleDetails": {
      "id": 2,
      "vehicleNo": "TS 05 AB 1234",
      "weightSlip": "1",
      "emptyWeight": 101,
      "loadWeight": 150,
      "tareWeight": 49,
      "createdDate": "2018-06-30",
      "updatedDate": "2018-06-30",
      "retired": false
    },
    "aasamiName": "sandeep",
    "brokerName": "vishnu",
    "productType": {
      "type": "Paddy",
      "retired": true
    },
    "bagsCount": 110,
    "quantity": 55,
    "quantityUnit": "Quintals",
    "pricePerQuintals": 1500,
    "purchaseAdjustments": {
      "id": 2,
      "bagsCost": 10,
      "weightBridgeCost": 100,
      "kulli": 200,
      "miscCost": 250,
      "labourCost": 1100
    },
    "finalSettlement": 82500,
    "status": "Purchased",
    "createdDate": "2018-06-30",
    "updatedDate": "2018-06-30",
    "retired": false
  },
  {
    "id": 3,
    "sno": "1",
    "vehicleDetails": {
      "id": 3,
      "vehicleNo": "TS 05 AC 1234",
      "weightSlip": "1",
      "emptyWeight": 102,
      "loadWeight": 150,
      "tareWeight": 48,
      "createdDate": "2018-06-30",
      "updatedDate": "2018-06-30",
      "retired": false
    },
    "aasamiName": "raghu",
    "brokerName": "vishnu",
    "productType": {
      "type": "Paddy",
      "retired": true
    },
    "bagsCount": 120,
    "quantity": 60,
    "quantityUnit": "Quintals",
    "pricePerQuintals": 1500,
    "purchaseAdjustments": {
      "id": 3,
      "bagsCost": 10,
      "weightBridgeCost": 150,
      "kulli": 300,
      "miscCost": 300,
      "labourCost": 1200
    },
    "finalSettlement": 90000,
    "status": "Purchased",
    "createdDate": "2018-06-30",
    "updatedDate": "2018-06-30",
    "retired": false
  },
  {
    "id": 4,
    "sno": "1",
    "vehicleDetails": {
      "id": 4,
      "vehicleNo": "TS 05 AD 1234",
      "weightSlip": "1",
      "emptyWeight": 103,
      "loadWeight": 250,
      "tareWeight": 147,
      "createdDate": "2018-06-30",
      "updatedDate": "2018-06-30",
      "retired": false
    },
    "aasamiName": "rahul",
    "brokerName": "vishnu",
    "productType": {
      "type": "Paddy",
      "retired": true
    },
    "bagsCount": 130,
    "quantity": 50,
    "quantityUnit": "Quintals",
    "pricePerQuintals": 1500,
    "purchaseAdjustments": {
      "id": 4,
      "bagsCost": 10,
      "weightBridgeCost": 100,
      "kulli": 400,
      "miscCost": 350,
      "labourCost": 1300
    },
    "finalSettlement": 150000,
    "status": "Purchased",
    "createdDate": "2018-06-30",
    "updatedDate": "2018-06-30",
    "retired": false
  },
  {
    "id": 5,
    "sno": "1",
    "vehicleDetails": {
      "id": 5,
      "vehicleNo": "TS 05 AE 1234",
      "weightSlip": "1",
      "emptyWeight": 104,
      "loadWeight": 200,
      "tareWeight": 96,
      "createdDate": "2018-06-30",
      "updatedDate": "2018-06-30",
      "retired": false
    },
    "aasamiName": "suman",
    "brokerName": "vishnu",
    "productType": {
      "type": "Paddy",
      "retired": true
    },
    "bagsCount": 140,
    "quantity": 50,
    "quantityUnit": "Quintals",
    "pricePerQuintals": 1500,
    "purchaseAdjustments": {
      "id": 5,
      "bagsCost": 10,
      "weightBridgeCost": 200,
      "kulli": 500,
      "miscCost": 500,
      "labourCost": 1400
    },
    "finalSettlement": 150000,
    "status": "Purchased",
    "createdDate": "2018-06-30",
    "updatedDate": "2018-06-30",
    "retired": false
  }
 ]