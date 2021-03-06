/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotemessage_KeyPress = require("../remotemessage/KeyPress");

  /**
  * @constructor
  * @memberof remotemessage
  */
  KeyPressEnum = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof remotemessage.KeyPressEnum
    * @private
    */
    initialize: function() {
      this._class_ = KeyPressEnum;
      this.status = undefined;
    },

    /**
    * Set the field value
    * @memberof remotemessage.KeyPressEnum
    * @param {remotemessage.KeyPress} status 
    */
    setStatus: function(status) {
      this.status = status;
    },

    /**
    * Get the field value
    * @memberof remotemessage.KeyPressEnum
    * @return {remotemessage.KeyPress} 
    */
    getStatus: function() {
      return this.status;
    },

    /**
    * @memberof remotemessage.KeyPressEnum
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

KeyPressEnum._meta_ =  {fields:  {}};
KeyPressEnum._meta_.fields["status"] = {};
KeyPressEnum._meta_.fields["status"].type = remotemessage_KeyPress;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = KeyPressEnum;
}

