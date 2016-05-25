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
  FireOrder = Class.create( {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function() {
      this._class_ = FireOrder;
      this.id = undefined;
      this.orderId = undefined;
      this.delay = undefined;
    },

    /**
    * Set the field value
    * Unique identifier
    *
    * @param {String} id 
    */
    setId: function(id) {
      this.id = id;
    },

    /**
    * Get the field value
    * Unique identifier
      * @return {String} 
    */
    getId: function() {
      return this.id;
    },

    /**
    * Set the field value
    * The id of the order to fire.
    *
    * @param {String} orderId 
    */
    setOrderId: function(orderId) {
      this.orderId = orderId;
    },

    /**
    * Get the field value
    * The id of the order to fire.
      * @return {String} 
    */
    getOrderId: function() {
      return this.orderId;
    },

    /**
    * Set the field value
    * How long in seconds to wait before calling fire.
    *
    * @param {Number} delay must be a long integer
    */
    setDelay: function(delay) {
      this.delay = delay;
    },

    /**
    * Get the field value
    * How long in seconds to wait before calling fire.
      * @return {Number} must be a long integer
    */
    getDelay: function() {
      return this.delay;
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

FireOrder._meta_ =  {fields:  {}};
FireOrder._meta_.fields["id"] = {};
FireOrder._meta_.fields["id"].type = String;
FireOrder._meta_.fields["orderId"] = {};
FireOrder._meta_.fields["orderId"].type = String;
FireOrder._meta_.fields["delay"] = {};
FireOrder._meta_.fields["delay"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = FireOrder;
}

