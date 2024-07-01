import { GPSData } from "./gpsData"

export class Alarma {
  constructor(
    alertId,
    alertType,
    message,
    timestamp,
    dispatcherID
    //aditionalInfo
  ) {
    this.alertId = alertId
    this.alertType = alertType
    this.message = message
    this.timestamp = timestamp
    this.dispatcherID = dispatcherID
    //this.aditionalInfo = aditionalInfo
  }
  getAlertId() {
    return this.alertId
  }
  getAlertType() {
    return this.alertType
  }
  getMessage() {
    return this.message
  }
  getTimestamp() {
    return this.timestamp
  }
  getDispatcherID() {
    return this.dispatcherID
  }
}
