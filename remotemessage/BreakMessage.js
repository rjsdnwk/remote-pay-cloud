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
  BreakMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @memberof remotemessage.BreakMessage
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = BreakMessage;
      this.setMethod(remotemessage_Method["BREAK"]);
    }
  });

BreakMessage._meta_ =  {fields:  {}};

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = BreakMessage;
}
