/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_KeyPress = require("../remotemessage/KeyPress");
var remotemessage_Message = require("../remotemessage/Message");

  /**
  * @constructor
  */
  KeyPressMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = KeyPressMessage;
      this.setMethod(remotemessage_Method["KEY_PRESS"]);
      this.keyPress = undefined;
    },

    /**
    * Set the field value
    * @param {KeyPress} keyPress 
    */
    setKeyPress: function(keyPress) {
      this.keyPress = keyPress;
    },

    /**
    * Get the field value
    * @return {KeyPress} 
    */
    getKeyPress: function() {
      return this.keyPress;
    }
  });

KeyPressMessage._meta_ =  {fields:  {}};
KeyPressMessage._meta_.fields["keyPress"] = {};
KeyPressMessage._meta_.fields["keyPress"].type = remotemessage_KeyPress;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = KeyPressMessage;
}

