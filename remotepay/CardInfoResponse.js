/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotepay_BaseResponse = require("../remotepay/BaseResponse");
var payments_VaultedCard = require("../payments/VaultedCard");

  /**
  * @constructor
  */
  CardInfoResponse = Class.create(remotepay_BaseResponse, {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = CardInfoResponse;
      this.card = undefined;
    },

    /**
    * Set the field value
    * The card that was vaulted.
    *
    * @param {VaultedCard} card 
    */
    setCard: function(card) {
      this.card = card;
    },

    /**
    * Get the field value
    * The card that was vaulted.
      * @return {VaultedCard} 
    */
    getCard: function() {
      return this.card;
    }
  });

CardInfoResponse._meta_ =  {fields:  {}};
CardInfoResponse._meta_.fields["card"] = {};
CardInfoResponse._meta_.fields["card"].type = payments_VaultedCard;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CardInfoResponse;
}

