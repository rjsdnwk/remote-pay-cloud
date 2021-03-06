/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotepay_BaseRequest = require("../remotepay/BaseRequest");

  /**
  * @constructor
  * @augments remotepay.BaseRequest
  * @memberof remotepay
  */
  TipAdjustAuthRequest = Class.create(remotepay_BaseRequest, {
    /**
    * Initialize the values for this.
    * @memberof remotepay.TipAdjustAuthRequest
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = TipAdjustAuthRequest;
      this.tipAmount = undefined;
      this.orderId = undefined;
      this.paymentId = undefined;
    },

    /**
    * Set the field value
    * Amount paid in tips
    *
    * @memberof remotepay.TipAdjustAuthRequest
    * @param {Number} tipAmount must be a long integer
    */
    setTipAmount: function(tipAmount) {
      this.tipAmount = tipAmount;
    },

    /**
    * Get the field value
    * Amount paid in tips
    * @memberof remotepay.TipAdjustAuthRequest
    * @return {Number} must be a long integer
    */
    getTipAmount: function() {
      return this.tipAmount;
    },

    /**
    * Set the field value
    * Unique identifier
    *
    * @memberof remotepay.TipAdjustAuthRequest
    * @param {String} orderId 
    */
    setOrderId: function(orderId) {
      this.orderId = orderId;
    },

    /**
    * Get the field value
    * Unique identifier
    * @memberof remotepay.TipAdjustAuthRequest
    * @return {String} 
    */
    getOrderId: function() {
      return this.orderId;
    },

    /**
    * Set the field value
    * Unique identifier
    *
    * @memberof remotepay.TipAdjustAuthRequest
    * @param {String} paymentId 
    */
    setPaymentId: function(paymentId) {
      this.paymentId = paymentId;
    },

    /**
    * Get the field value
    * Unique identifier
    * @memberof remotepay.TipAdjustAuthRequest
    * @return {String} 
    */
    getPaymentId: function() {
      return this.paymentId;
    }
  });

TipAdjustAuthRequest._meta_ =  {fields:  {}};
TipAdjustAuthRequest._meta_.fields["tipAmount"] = {};
TipAdjustAuthRequest._meta_.fields["tipAmount"].type = Number;
TipAdjustAuthRequest._meta_.fields["orderId"] = {};
TipAdjustAuthRequest._meta_.fields["orderId"].type = String;
TipAdjustAuthRequest._meta_.fields["paymentId"] = {};
TipAdjustAuthRequest._meta_.fields["paymentId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TipAdjustAuthRequest;
}

