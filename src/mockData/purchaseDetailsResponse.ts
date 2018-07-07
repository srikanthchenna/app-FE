import { PurchaseRegisterDetails } from '../beans/purchase-register-details';
import {VEHICLE_DETAILS} from '../mockData/vehicleDetailsResponse';
import { VehicleDetails } from '../beans/vehicle-details';

export const PURCHASE_DETAILS: PurchaseRegisterDetails[] =[
    {
      "sno": "1",
      "vehicleDetails":VEHICLE_DETAILS[0],
      "aasamiName": "srikanth",
      "brokerName": "vishnu",
      "productType": "Paddy",
      "bagsCount": 100,
      "quantity": 50,
      "quantityUnit": "Quintals",
      "pricePerQuintals": 1500,
      "purchaseAdjustments": {
        "bagsCost": 10,
        "weightBridgeCost": 150,
        "kulli": 300,
        "miscCost": 300,
        "labourCost": 1200
      },
      "finalSettlement": 75000,
      "status": "Pending",
    },
    {
      
      "sno": "2",
      "vehicleDetails": {
        
        "vehicleNo": "TS 05 AB 1234",
        "weightSlip": "1",
        "emptyWeight": 101,
        "loadWeight": 150,
        "tareWeight": 49,
      },
      "aasamiName": "sandeep",
      "brokerName": "vishnu",
      "productType": "Paddy",
      "bagsCount": 110,
      "quantity": 55,
      "quantityUnit": "Quintals",
      "pricePerQuintals": 1500,
      "purchaseAdjustments": {
        "bagsCost": 10,
        "weightBridgeCost": 150,
        "kulli": 300,
        "miscCost": 300,
        "labourCost": 1200
      },
      "finalSettlement": 82500,
      "status": "Purchased",
      
    },
    {
      "sno": "3",
      "vehicleDetails": {
        
        "vehicleNo": "TS 05 AC 1234",
        "weightSlip": "1",
        "emptyWeight": 102,
        "loadWeight": 150,
        "tareWeight": 48,
      
      },
      "aasamiName": "raghu",
      "brokerName": "vishnu",
      "productType": "Paddy",
      "bagsCount": 120,
      "quantity": 60,
      "quantityUnit": "Quintals",
      "pricePerQuintals": 1500,
      "purchaseAdjustments": {
        "bagsCost": 10,
        "weightBridgeCost": 150,
        "kulli": 300,
        "miscCost": 300,
        "labourCost": 1200
      },
      "finalSettlement": 90000,
      "status": "Purchased",
     
    },
    {
      "sno": "4",
      "vehicleDetails": {
        
        "vehicleNo": "TS 05 AD 1234",
        "weightSlip": "1",
        "emptyWeight": 103,
        "loadWeight": 250,
        "tareWeight": 147,
     
      },
      "aasamiName": "rahul",
      "brokerName": "vishnu",
      "productType": "Paddy",
      "bagsCount": 130,
      "quantity": 50,
      "quantityUnit": "Quintals",
      "pricePerQuintals": 1500,
      "purchaseAdjustments": {
        "bagsCost": 10,
        "weightBridgeCost": 150,
        "kulli": 300,
        "miscCost": 300,
        "labourCost": 1200
      },
      "finalSettlement": 150000,
      "status": "Purchased",
      
    },
    {
      "sno": "5",
      "vehicleDetails": {
        "vehicleNo": "TS 05 AE 1234",
        "weightSlip": "1",
        "emptyWeight": 104,
        "loadWeight": 200,
        "tareWeight": 96,
      },
      "aasamiName": "suman",
      "brokerName": "vishnu",
      "productType": "Paddy",
      "bagsCount": 140,
      "quantity": 50,
      "quantityUnit": "Quintals",
      "pricePerQuintals": 1500,
      "purchaseAdjustments": {
        "bagsCost": 10,
        "weightBridgeCost": 150,
        "kulli": 300,
        "miscCost": 300,
        "labourCost": 1200
      },
      "finalSettlement": 150000,
      "status": "Purchased",
      }
  ]