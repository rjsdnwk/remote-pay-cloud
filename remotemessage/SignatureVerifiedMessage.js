/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");
var payments_Payment = require("../payments/Payment");

  /**
  * @constructor
  */
  SignatureVerifiedMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = SignatureVerifiedMessage;
      this.setMethod(remotemessage_Method["SIGNATURE_VERIFIED"]);
      this.payment = undefined;
      this.verified = undefined;
    },

    /**
    * Set the field value
    * A payment
    *
    * @param {Payment} payment 
    */
    setPayment: function(payment) {
      this.payment = payment;
    },

    /**
    * Get the field value
    * A payment
      * @return {Payment} 
    */
    getPayment: function() {
      return this.payment;
    },

    /**
    * Set the field value
    * If true the signature is verified
    *
    * @param {Boolean} verified 
    */
    setVerified: function(verified) {
      this.verified = verified;
    },

    /**
    * Get the field value
    * If true the signature is verified
      * @return {Boolean} 
    */
    getVerified: function() {
      return this.verified;
    }
  });

SignatureVerifiedMessage._meta_ =  {fields:  {}};
SignatureVerifiedMessage._meta_.fields["payment"] = {};
SignatureVerifiedMessage._meta_.fields["payment"].type = payments_Payment;
SignatureVerifiedMessage._meta_.fields["verified"] = {};
SignatureVerifiedMessage._meta_.fields["verified"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = SignatureVerifiedMessage;
}

