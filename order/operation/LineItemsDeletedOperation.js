/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");

  /**
  * @constructor
  * @memberof order.operation
  */
  LineItemsDeletedOperation = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof order.operation.LineItemsDeletedOperation
    * @private
    */
    initialize: function() {
      this._class_ = LineItemsDeletedOperation;
      this.ids = undefined;
      this.orderId = undefined;
    },

    /**
    * Set the field value
    * @memberof order.operation.LineItemsDeletedOperation
    * @param {Array.<String>} ids An array of 
    */
    setIds: function(ids) {
      this.ids = ids;
    },

    /**
    * Get the field value
    * @memberof order.operation.LineItemsDeletedOperation
    * @return {Array.<String>} An array of 
    */
    getIds: function() {
      return this.ids;
    },

    /**
    * Set the field value
    * @memberof order.operation.LineItemsDeletedOperation
    * @param {String} orderId 
    */
    setOrderId: function(orderId) {
      this.orderId = orderId;
    },

    /**
    * Get the field value
    * @memberof order.operation.LineItemsDeletedOperation
    * @return {String} 
    */
    getOrderId: function() {
      return this.orderId;
    },

    /**
    * @memberof order.operation.LineItemsDeletedOperation
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

LineItemsDeletedOperation._meta_ =  {fields:  {}};
LineItemsDeletedOperation._meta_.fields["ids"] = {};
LineItemsDeletedOperation._meta_.fields["ids"].type = Array;
LineItemsDeletedOperation._meta_.fields["orderId"] = {};
LineItemsDeletedOperation._meta_.fields["orderId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = LineItemsDeletedOperation;
}

