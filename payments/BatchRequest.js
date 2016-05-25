/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");

  /**
  * @constructor
  */
  BatchRequest = Class.create( {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function() {
      this._class_ = BatchRequest;
      this.devices = undefined;
    },

    /**
    * Set the field value
    * @param {Array.<String>} devices An array of 
    */
    setDevices: function(devices) {
      this.devices = devices;
    },

    /**
    * Get the field value
    * @return {Array.<String>} An array of 
    */
    getDevices: function() {
      return this.devices;
    },
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

BatchRequest._meta_ =  {fields:  {}};
BatchRequest._meta_.fields["devices"] = {};
BatchRequest._meta_.fields["devices"].type = Array;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = BatchRequest;
}

