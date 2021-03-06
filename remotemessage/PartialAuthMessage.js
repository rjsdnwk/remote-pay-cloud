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
  * @augments remotemessage.Message
  * @memberof remotemessage
  */
  PartialAuthMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @memberof remotemessage.PartialAuthMessage
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = PartialAuthMessage;
      this.setMethod(remotemessage_Method["PARTIAL_AUTH"]);
      this.partialAuthAmount = undefined;
    },

    /**
    * Set the field value
    * Amount authorized
    *
    * @memberof remotemessage.PartialAuthMessage
    * @param {Number} partialAuthAmount must be a long integer
    */
    setPartialAuthAmount: function(partialAuthAmount) {
      this.partialAuthAmount = partialAuthAmount;
    },

    /**
    * Get the field value
    * Amount authorized
    * @memberof remotemessage.PartialAuthMessage
    * @return {Number} must be a long integer
    */
    getPartialAuthAmount: function() {
      return this.partialAuthAmount;
    }
  });

PartialAuthMessage._meta_ =  {fields:  {}};
PartialAuthMessage._meta_.fields["partialAuthAmount"] = {};
PartialAuthMessage._meta_.fields["partialAuthAmount"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PartialAuthMessage;
}

