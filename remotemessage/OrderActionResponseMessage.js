/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");
var remotemessage_OrderActionResponse = require("../remotemessage/OrderActionResponse");

  /**
  * @constructor
  */
  OrderActionResponseMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = OrderActionResponseMessage;
      this.setMethod(remotemessage_Method["ORDER_ACTION_RESPONSE"]);
      this.orderActionResponse = undefined;
    },

    /**
    * Set the field value
    * @param {OrderActionResponse} orderActionResponse 
    */
    setOrderActionResponse: function(orderActionResponse) {
      this.orderActionResponse = orderActionResponse;
    },

    /**
    * Get the field value
    * @return {OrderActionResponse} 
    */
    getOrderActionResponse: function() {
      return this.orderActionResponse;
    }
  });

OrderActionResponseMessage._meta_ =  {fields:  {}};
OrderActionResponseMessage._meta_.fields["orderActionResponse"] = {};
OrderActionResponseMessage._meta_.fields["orderActionResponse"].type = remotemessage_OrderActionResponse;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = OrderActionResponseMessage;
}

