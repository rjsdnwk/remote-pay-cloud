/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

  /**
  * @constructor
  */
  RefundRequestMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = RefundRequestMessage;
      this.setMethod(remotemessage_Method["REFUND_REQUEST"]);
      this.fullRefund = undefined;
      this.amount = undefined;
      this.orderId = undefined;
      this.paymentId = undefined;
    },

    /**
    * Set the field value
    * If true, then it is a full refund.  The amount will be ignored.
    *
    * @param {Boolean} fullRefund 
    */
    setFullRefund: function(fullRefund) {
      this.fullRefund = fullRefund;
    },

    /**
    * Get the field value
    * If true, then it is a full refund.  The amount will be ignored.
      * @return {Boolean} 
    */
    getFullRefund: function() {
      return this.fullRefund;
    },

    /**
    * Set the field value
    * Amount of refund.  Used in partial refunds.
    *
    * @param {Number} amount must be a long integer
    */
    setAmount: function(amount) {
      this.amount = amount;
    },

    /**
    * Get the field value
    * Amount of refund.  Used in partial refunds.
      * @return {Number} must be a long integer
    */
    getAmount: function() {
      return this.amount;
    },

    /**
    * Set the field value
    * Unique identifier for a order
    *
    * @param {String} orderId 
    */
    setOrderId: function(orderId) {
      this.orderId = orderId;
    },

    /**
    * Get the field value
    * Unique identifier for a order
      * @return {String} 
    */
    getOrderId: function() {
      return this.orderId;
    },

    /**
    * Set the field value
    * Unique identifier for a payment
    *
    * @param {String} paymentId 
    */
    setPaymentId: function(paymentId) {
      this.paymentId = paymentId;
    },

    /**
    * Get the field value
    * Unique identifier for a payment
      * @return {String} 
    */
    getPaymentId: function() {
      return this.paymentId;
    }
  });

RefundRequestMessage._meta_ =  {fields:  {}};
RefundRequestMessage._meta_.fields["fullRefund"] = {};
RefundRequestMessage._meta_.fields["fullRefund"].type = Boolean;
RefundRequestMessage._meta_.fields["amount"] = {};
RefundRequestMessage._meta_.fields["amount"].type = Number;
RefundRequestMessage._meta_.fields["orderId"] = {};
RefundRequestMessage._meta_.fields["orderId"].type = String;
RefundRequestMessage._meta_.fields["paymentId"] = {};
RefundRequestMessage._meta_.fields["paymentId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RefundRequestMessage;
}

