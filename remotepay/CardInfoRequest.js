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
  CardInfoRequest = Class.create(remotepay_BaseRequest, {
    /**
    * Initialize the values for this.
    * @memberof remotepay.CardInfoRequest
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = CardInfoRequest;
      this.cardEntryMethods = undefined;
    },

    /**
    * Set the field value
    * Allowed entry methods
    *
    * @memberof remotepay.CardInfoRequest
    * @param {Number} cardEntryMethods must be an integer
    */
    setCardEntryMethods: function(cardEntryMethods) {
      this.cardEntryMethods = cardEntryMethods;
    },

    /**
    * Get the field value
    * Allowed entry methods
    * @memberof remotepay.CardInfoRequest
    * @return {Number} must be an integer
    */
    getCardEntryMethods: function() {
      return this.cardEntryMethods;
    }
  });

CardInfoRequest._meta_ =  {fields:  {}};
CardInfoRequest._meta_.fields["cardEntryMethods"] = {};
CardInfoRequest._meta_.fields["cardEntryMethods"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CardInfoRequest;
}

