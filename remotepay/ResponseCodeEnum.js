/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotepay_ResponseCode = require("../remotepay/ResponseCode");

  /**
  * @constructor
  * @memberof remotepay
  */
  ResponseCodeEnum = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof remotepay.ResponseCodeEnum
    * @private
    */
    initialize: function() {
      this._class_ = ResponseCodeEnum;
      this.status = undefined;
    },

    /**
    * Set the field value
    * @memberof remotepay.ResponseCodeEnum
    * @param {remotepay.ResponseCode} status 
    */
    setStatus: function(status) {
      this.status = status;
    },

    /**
    * Get the field value
    * @memberof remotepay.ResponseCodeEnum
    * @return {remotepay.ResponseCode} 
    */
    getStatus: function() {
      return this.status;
    },

    /**
    * @memberof remotepay.ResponseCodeEnum
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

ResponseCodeEnum._meta_ =  {fields:  {}};
ResponseCodeEnum._meta_.fields["status"] = {};
ResponseCodeEnum._meta_.fields["status"].type = remotepay_ResponseCode;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ResponseCodeEnum;
}

