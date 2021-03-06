/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_PayIntent = require("../remotemessage/PayIntent");
var remotemessage_Message = require("../remotemessage/Message");
var order_Order = require("../order/Order");

  /**
  * @constructor
  * @augments remotemessage.Message
  * @memberof remotemessage
  */
  TxStartRequestMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @memberof remotemessage.TxStartRequestMessage
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = TxStartRequestMessage;
      this.setMethod(remotemessage_Method["TX_START"]);
      this.suppressOnScreenTips = undefined;
      this.order = undefined;
      this.payIntent = undefined;
    },

    /**
    * Set the field value
    * If true, then tips on the screen should not be displayed.
    *
    * @memberof remotemessage.TxStartRequestMessage
    * @param {Boolean} suppressOnScreenTips 
    */
    setSuppressOnScreenTips: function(suppressOnScreenTips) {
      this.suppressOnScreenTips = suppressOnScreenTips;
    },

    /**
    * Get the field value
    * If true, then tips on the screen should not be displayed.
    * @memberof remotemessage.TxStartRequestMessage
    * @return {Boolean} 
    */
    getSuppressOnScreenTips: function() {
      return this.suppressOnScreenTips;
    },

    /**
    * Set the field value
    * The order
    *
    * @memberof remotemessage.TxStartRequestMessage
    * @param {order.Order} order 
    */
    setOrder: function(order) {
      this.order = order;
    },

    /**
    * Get the field value
    * The order
    * @memberof remotemessage.TxStartRequestMessage
    * @return {order.Order} 
    */
    getOrder: function() {
      return this.order;
    },

    /**
    * Set the field value
    * The payIntent
    *
    * @memberof remotemessage.TxStartRequestMessage
    * @param {remotemessage.PayIntent} payIntent 
    */
    setPayIntent: function(payIntent) {
      this.payIntent = payIntent;
    },

    /**
    * Get the field value
    * The payIntent
    * @memberof remotemessage.TxStartRequestMessage
    * @return {remotemessage.PayIntent} 
    */
    getPayIntent: function() {
      return this.payIntent;
    }
  });

TxStartRequestMessage._meta_ =  {fields:  {}};
TxStartRequestMessage._meta_.fields["suppressOnScreenTips"] = {};
TxStartRequestMessage._meta_.fields["suppressOnScreenTips"].type = Boolean;
TxStartRequestMessage._meta_.fields["order"] = {};
TxStartRequestMessage._meta_.fields["order"].type = order_Order;
TxStartRequestMessage._meta_.fields["payIntent"] = {};
TxStartRequestMessage._meta_.fields["payIntent"].type = remotemessage_PayIntent;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TxStartRequestMessage;
}

