/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");

  /**
  * @constructor
  * @memberof remotepay
  */
  DisplayReceiptOptionsRequest = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof remotepay.DisplayReceiptOptionsRequest
    * @private
    */
    initialize: function() {
      this._class_ = DisplayReceiptOptionsRequest;
      this.orderId = undefined;
      this.paymentId = undefined;
    },

    /**
    * Set the field value
    * Unique identifier
    *
    * @memberof remotepay.DisplayReceiptOptionsRequest
    * @param {String} orderId 
    */
    setOrderId: function(orderId) {
      this.orderId = orderId;
    },

    /**
    * Get the field value
    * Unique identifier
    * @memberof remotepay.DisplayReceiptOptionsRequest
    * @return {String} 
    */
    getOrderId: function() {
      return this.orderId;
    },

    /**
    * Set the field value
    * Unique identifier
    *
    * @memberof remotepay.DisplayReceiptOptionsRequest
    * @param {String} paymentId 
    */
    setPaymentId: function(paymentId) {
      this.paymentId = paymentId;
    },

    /**
    * Get the field value
    * Unique identifier
    * @memberof remotepay.DisplayReceiptOptionsRequest
    * @return {String} 
    */
    getPaymentId: function() {
      return this.paymentId;
    },

    /**
    * @memberof remotepay.DisplayReceiptOptionsRequest
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

DisplayReceiptOptionsRequest._meta_ =  {fields:  {}};
DisplayReceiptOptionsRequest._meta_.fields["orderId"] = {};
DisplayReceiptOptionsRequest._meta_.fields["orderId"].type = String;
DisplayReceiptOptionsRequest._meta_.fields["paymentId"] = {};
DisplayReceiptOptionsRequest._meta_.fields["paymentId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = DisplayReceiptOptionsRequest;
}

