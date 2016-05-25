/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var payments_BatchTotalType = require("../payments/BatchTotalType");

  /**
  * @constructor
  */
  ServerTotalStats = Class.create( {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function() {
      this._class_ = ServerTotalStats;
      this.employeeId = undefined;
      this.employeeName = undefined;
      this.sales = undefined;
      this.refunds = undefined;
      this.net = undefined;
      this.giftCardLoads = undefined;
      this.giftCardCashOuts = undefined;
      this.tax = undefined;
      this.tips = undefined;
    },

    /**
    * Set the field value
    * Employee corresponding to these stats
    *
    * @param {String} employeeId 
    */
    setEmployeeId: function(employeeId) {
      this.employeeId = employeeId;
    },

    /**
    * Get the field value
    * Employee corresponding to these stats
      * @return {String} 
    */
    getEmployeeId: function() {
      return this.employeeId;
    },

    /**
    * Set the field value
    * @param {String} employeeName 
    */
    setEmployeeName: function(employeeName) {
      this.employeeName = employeeName;
    },

    /**
    * Get the field value
    * @return {String} 
    */
    getEmployeeName: function() {
      return this.employeeName;
    },

    /**
    * Set the field value
    * @param {BatchTotalType} sales 
    */
    setSales: function(sales) {
      this.sales = sales;
    },

    /**
    * Get the field value
    * @return {BatchTotalType} 
    */
    getSales: function() {
      return this.sales;
    },

    /**
    * Set the field value
    * @param {BatchTotalType} refunds 
    */
    setRefunds: function(refunds) {
      this.refunds = refunds;
    },

    /**
    * Get the field value
    * @return {BatchTotalType} 
    */
    getRefunds: function() {
      return this.refunds;
    },

    /**
    * Set the field value
    * @param {BatchTotalType} net 
    */
    setNet: function(net) {
      this.net = net;
    },

    /**
    * Get the field value
    * @return {BatchTotalType} 
    */
    getNet: function() {
      return this.net;
    },

    /**
    * Set the field value
    * @param {BatchTotalType} giftCardLoads 
    */
    setGiftCardLoads: function(giftCardLoads) {
      this.giftCardLoads = giftCardLoads;
    },

    /**
    * Get the field value
    * @return {BatchTotalType} 
    */
    getGiftCardLoads: function() {
      return this.giftCardLoads;
    },

    /**
    * Set the field value
    * @param {BatchTotalType} giftCardCashOuts 
    */
    setGiftCardCashOuts: function(giftCardCashOuts) {
      this.giftCardCashOuts = giftCardCashOuts;
    },

    /**
    * Get the field value
    * @return {BatchTotalType} 
    */
    getGiftCardCashOuts: function() {
      return this.giftCardCashOuts;
    },

    /**
    * Set the field value
    * @param {BatchTotalType} tax 
    */
    setTax: function(tax) {
      this.tax = tax;
    },

    /**
    * Get the field value
    * @return {BatchTotalType} 
    */
    getTax: function() {
      return this.tax;
    },

    /**
    * Set the field value
    * @param {BatchTotalType} tips 
    */
    setTips: function(tips) {
      this.tips = tips;
    },

    /**
    * Get the field value
    * @return {BatchTotalType} 
    */
    getTips: function() {
      return this.tips;
    },
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

ServerTotalStats._meta_ =  {fields:  {}};
ServerTotalStats._meta_.fields["employeeId"] = {};
ServerTotalStats._meta_.fields["employeeId"].type = String;
ServerTotalStats._meta_.fields["employeeName"] = {};
ServerTotalStats._meta_.fields["employeeName"].type = String;
ServerTotalStats._meta_.fields["sales"] = {};
ServerTotalStats._meta_.fields["sales"].type = payments_BatchTotalType;
ServerTotalStats._meta_.fields["refunds"] = {};
ServerTotalStats._meta_.fields["refunds"].type = payments_BatchTotalType;
ServerTotalStats._meta_.fields["net"] = {};
ServerTotalStats._meta_.fields["net"].type = payments_BatchTotalType;
ServerTotalStats._meta_.fields["giftCardLoads"] = {};
ServerTotalStats._meta_.fields["giftCardLoads"].type = payments_BatchTotalType;
ServerTotalStats._meta_.fields["giftCardCashOuts"] = {};
ServerTotalStats._meta_.fields["giftCardCashOuts"].type = payments_BatchTotalType;
ServerTotalStats._meta_.fields["tax"] = {};
ServerTotalStats._meta_.fields["tax"].type = payments_BatchTotalType;
ServerTotalStats._meta_.fields["tips"] = {};
ServerTotalStats._meta_.fields["tips"].type = payments_BatchTotalType;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ServerTotalStats;
}

