/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");

  /**
  * @constructor
  * @memberof hours
  */
  HourRange = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof hours.HourRange
    * @private
    */
    initialize: function() {
      this._class_ = HourRange;
      this.start = undefined;
      this.end = undefined;
    },

    /**
    * Set the field value
    * @memberof hours.HourRange
    * @param {Number} start must be an integer
    */
    setStart: function(start) {
      this.start = start;
    },

    /**
    * Get the field value
    * @memberof hours.HourRange
    * @return {Number} must be an integer
    */
    getStart: function() {
      return this.start;
    },

    /**
    * Set the field value
    * @memberof hours.HourRange
    * @param {Number} end must be an integer
    */
    setEnd: function(end) {
      this.end = end;
    },

    /**
    * Get the field value
    * @memberof hours.HourRange
    * @return {Number} must be an integer
    */
    getEnd: function() {
      return this.end;
    },

    /**
    * @memberof hours.HourRange
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

HourRange._meta_ =  {fields:  {}};
HourRange._meta_.fields["start"] = {};
HourRange._meta_.fields["start"].type = Number;
HourRange._meta_.fields["end"] = {};
HourRange._meta_.fields["end"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = HourRange;
}
