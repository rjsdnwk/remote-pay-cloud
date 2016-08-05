/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var payments_BatchType = require("../payments/BatchType");
var payments_BatchDetail = require("../payments/BatchDetail");
var payments_BatchState = require("../payments/BatchState");

  /**
  * @constructor
  * @memberof payments
  */
  Batch = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof payments.Batch
    * @private
    */
    initialize: function() {
      this._class_ = Batch;
      this.id = undefined;
      this.merchantId = undefined;
      this.firstGatewayTxId = undefined;
      this.lastGatewayTxId = undefined;
      this.accountId = undefined;
      this.txCount = 0;
      this.totalBatchAmount = 0;
      this.devices = undefined;
      this.state = payments_BatchState["OPEN"];
      this.batchType = undefined;
      this.createdTime = undefined;
      this.modifiedTime = undefined;
      this.batchDetails = undefined;
    },

    /**
    * Set the field value
    * @memberof payments.Batch
    * @param {String} id 
    */
    setId: function(id) {
      this.id = id;
    },

    /**
    * Get the field value
    * @memberof payments.Batch
    * @return {String} 
    */
    getId: function() {
      return this.id;
    },

    /**
    * Set the field value
    * @memberof payments.Batch
    * @param {Number} merchantId must be a long integer
    */
    setMerchantId: function(merchantId) {
      this.merchantId = merchantId;
    },

    /**
    * Get the field value
    * @memberof payments.Batch
    * @return {Number} must be a long integer
    */
    getMerchantId: function() {
      return this.merchantId;
    },

    /**
    * Set the field value
    * @memberof payments.Batch
    * @param {Number} firstGatewayTxId must be a long integer
    */
    setFirstGatewayTxId: function(firstGatewayTxId) {
      this.firstGatewayTxId = firstGatewayTxId;
    },

    /**
    * Get the field value
    * @memberof payments.Batch
    * @return {Number} must be a long integer
    */
    getFirstGatewayTxId: function() {
      return this.firstGatewayTxId;
    },

    /**
    * Set the field value
    * @memberof payments.Batch
    * @param {Number} lastGatewayTxId must be a long integer
    */
    setLastGatewayTxId: function(lastGatewayTxId) {
      this.lastGatewayTxId = lastGatewayTxId;
    },

    /**
    * Get the field value
    * @memberof payments.Batch
    * @return {Number} must be a long integer
    */
    getLastGatewayTxId: function() {
      return this.lastGatewayTxId;
    },

    /**
    * Set the field value
    * The id of employee who executed batch
    *
    * @memberof payments.Batch
    * @param {Number} accountId must be a long integer
    */
    setAccountId: function(accountId) {
      this.accountId = accountId;
    },

    /**
    * Get the field value
    * The id of employee who executed batch
    * @memberof payments.Batch
    * @return {Number} must be a long integer
    */
    getAccountId: function() {
      return this.accountId;
    },

    /**
    * Set the field value
    * The number of transactions being batched
    *
    * @memberof payments.Batch
    * @param {Number} txCount must be a long integer
    */
    setTxCount: function(txCount) {
      this.txCount = txCount;
    },

    /**
    * Get the field value
    * The number of transactions being batched
    * @memberof payments.Batch
    * @return {Number} must be a long integer
    */
    getTxCount: function() {
      return this.txCount;
    },

    /**
    * Set the field value
    * Total amount closed
    *
    * @memberof payments.Batch
    * @param {Number} totalBatchAmount must be a long integer
    */
    setTotalBatchAmount: function(totalBatchAmount) {
      this.totalBatchAmount = totalBatchAmount;
    },

    /**
    * Get the field value
    * Total amount closed
    * @memberof payments.Batch
    * @return {Number} must be a long integer
    */
    getTotalBatchAmount: function() {
      return this.totalBatchAmount;
    },

    /**
    * Set the field value
    * List of devices in batch
    *
    * @memberof payments.Batch
    * @param {String} devices 
    */
    setDevices: function(devices) {
      this.devices = devices;
    },

    /**
    * Get the field value
    * List of devices in batch
    * @memberof payments.Batch
    * @return {String} 
    */
    getDevices: function() {
      return this.devices;
    },

    /**
    * Set the field value
    * @memberof payments.Batch
    * @param {payments.BatchState} state 
    */
    setState: function(state) {
      this.state = state;
    },

    /**
    * Get the field value
    * @memberof payments.Batch
    * @return {payments.BatchState} 
    */
    getState: function() {
      return this.state;
    },

    /**
    * Set the field value
    * @memberof payments.Batch
    * @param {payments.BatchType} batchType 
    */
    setBatchType: function(batchType) {
      this.batchType = batchType;
    },

    /**
    * Get the field value
    * @memberof payments.Batch
    * @return {payments.BatchType} 
    */
    getBatchType: function() {
      return this.batchType;
    },

    /**
    * Set the field value
    * Created time of batch
    *
    * @memberof payments.Batch
    * @param {Number} createdTime must be a long integer
    */
    setCreatedTime: function(createdTime) {
      this.createdTime = createdTime;
    },

    /**
    * Get the field value
    * Created time of batch
    * @memberof payments.Batch
    * @return {Number} must be a long integer
    */
    getCreatedTime: function() {
      return this.createdTime;
    },

    /**
    * Set the field value
    * Modified time of batch
    *
    * @memberof payments.Batch
    * @param {Number} modifiedTime must be a long integer
    */
    setModifiedTime: function(modifiedTime) {
      this.modifiedTime = modifiedTime;
    },

    /**
    * Get the field value
    * Modified time of batch
    * @memberof payments.Batch
    * @return {Number} must be a long integer
    */
    getModifiedTime: function() {
      return this.modifiedTime;
    },

    /**
    * Set the field value
    * Details split based on card / employees
    *
    * @memberof payments.Batch
    * @param {payments.BatchDetail} batchDetails 
    */
    setBatchDetails: function(batchDetails) {
      this.batchDetails = batchDetails;
    },

    /**
    * Get the field value
    * Details split based on card / employees
    * @memberof payments.Batch
    * @return {payments.BatchDetail} 
    */
    getBatchDetails: function() {
      return this.batchDetails;
    },

    /**
    * @memberof payments.Batch
    * @private
    */
    getMetaInfo: function(fieldName) {
      var curclass = this._class_;
      do {
        var fieldMetaInfo = curclass._meta_.fields[fieldName];
        if(fieldMetaInfo) {
          return fieldMetaInfo;
        }
        curclass = curclass.superclass;
      } while(curclass);
      return null;
    },

    toString: function() {
      return JSON.stringify(this);
    }

  });

Batch._meta_ =  {fields:  {}};
Batch._meta_.fields["id"] = {};
Batch._meta_.fields["id"].type = String;
Batch._meta_.fields["merchantId"] = {};
Batch._meta_.fields["merchantId"].type = Number;
Batch._meta_.fields["firstGatewayTxId"] = {};
Batch._meta_.fields["firstGatewayTxId"].type = Number;
Batch._meta_.fields["lastGatewayTxId"] = {};
Batch._meta_.fields["lastGatewayTxId"].type = Number;
Batch._meta_.fields["accountId"] = {};
Batch._meta_.fields["accountId"].type = Number;
Batch._meta_.fields["txCount"] = {};
Batch._meta_.fields["txCount"].type = Number;
Batch._meta_.fields["totalBatchAmount"] = {};
Batch._meta_.fields["totalBatchAmount"].type = Number;
Batch._meta_.fields["devices"] = {};
Batch._meta_.fields["devices"].type = String;
Batch._meta_.fields["state"] = {};
Batch._meta_.fields["state"].type = payments_BatchState;
Batch._meta_.fields["batchType"] = {};
Batch._meta_.fields["batchType"].type = payments_BatchType;
Batch._meta_.fields["createdTime"] = {};
Batch._meta_.fields["createdTime"].type = Number;
Batch._meta_.fields["modifiedTime"] = {};
Batch._meta_.fields["modifiedTime"].type = Number;
Batch._meta_.fields["batchDetails"] = {};
Batch._meta_.fields["batchDetails"].type = payments_BatchDetail;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Batch;
}
