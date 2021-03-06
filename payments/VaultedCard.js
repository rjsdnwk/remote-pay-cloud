/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");

  /**
  * @constructor
  * @memberof payments
  */
  VaultedCard = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof payments.VaultedCard
    * @private
    */
    initialize: function() {
      this._class_ = VaultedCard;
      this.first6 = undefined;
      this.last4 = undefined;
      this.cardholderName = undefined;
      this.expirationDate = undefined;
      this.token = undefined;
    },

    /**
    * Set the field value
    * @memberof payments.VaultedCard
    * @param {String} first6 
    */
    setFirst6: function(first6) {
      this.first6 = first6;
    },

    /**
    * Get the field value
    * @memberof payments.VaultedCard
    * @return {String} 
    */
    getFirst6: function() {
      return this.first6;
    },

    /**
    * Set the field value
    * @memberof payments.VaultedCard
    * @param {String} last4 
    */
    setLast4: function(last4) {
      this.last4 = last4;
    },

    /**
    * Get the field value
    * @memberof payments.VaultedCard
    * @return {String} 
    */
    getLast4: function() {
      return this.last4;
    },

    /**
    * Set the field value
    * @memberof payments.VaultedCard
    * @param {String} cardholderName 
    */
    setCardholderName: function(cardholderName) {
      this.cardholderName = cardholderName;
    },

    /**
    * Get the field value
    * @memberof payments.VaultedCard
    * @return {String} 
    */
    getCardholderName: function() {
      return this.cardholderName;
    },

    /**
    * Set the field value
    * @memberof payments.VaultedCard
    * @param {String} expirationDate 
    */
    setExpirationDate: function(expirationDate) {
      this.expirationDate = expirationDate;
    },

    /**
    * Get the field value
    * @memberof payments.VaultedCard
    * @return {String} 
    */
    getExpirationDate: function() {
      return this.expirationDate;
    },

    /**
    * Set the field value
    * @memberof payments.VaultedCard
    * @param {String} token 
    */
    setToken: function(token) {
      this.token = token;
    },

    /**
    * Get the field value
    * @memberof payments.VaultedCard
    * @return {String} 
    */
    getToken: function() {
      return this.token;
    },

    /**
    * @memberof payments.VaultedCard
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

VaultedCard._meta_ =  {fields:  {}};
VaultedCard._meta_.fields["first6"] = {};
VaultedCard._meta_.fields["first6"].type = String;
VaultedCard._meta_.fields["last4"] = {};
VaultedCard._meta_.fields["last4"].type = String;
VaultedCard._meta_.fields["cardholderName"] = {};
VaultedCard._meta_.fields["cardholderName"].type = String;
VaultedCard._meta_.fields["expirationDate"] = {};
VaultedCard._meta_.fields["expirationDate"].type = String;
VaultedCard._meta_.fields["token"] = {};
VaultedCard._meta_.fields["token"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VaultedCard;
}

