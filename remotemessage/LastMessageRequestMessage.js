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
  LastMessageRequestMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @memberof remotemessage.LastMessageRequestMessage
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = LastMessageRequestMessage;
      this.setMethod(remotemessage_Method["LAST_MSG_REQUEST"]);
    }
  });

LastMessageRequestMessage._meta_ =  {fields:  {}};

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = LastMessageRequestMessage;
}

