/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var payments_Batch = require("../payments/Batch");
var remotepay_BaseResponse = require("../remotepay/BaseResponse");

/** The result of a request to do a closeout */
  /**
  * @constructor
  */
  CloseoutResponse = Class.create(remotepay_BaseResponse, {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = CloseoutResponse;
      this.batch = undefined;
    },

    /**
    * Set the field value
    * The batch that was closed out.
    *
    * @param {Batch} batch 
    */
    setBatch: function(batch) {
      this.batch = batch;
    },

    /**
    * Get the field value
    * The batch that was closed out.
      * @return {Batch} 
    */
    getBatch: function() {
      return this.batch;
    }
  });

CloseoutResponse._meta_ =  {fields:  {}};
CloseoutResponse._meta_.fields["batch"] = {};
CloseoutResponse._meta_.fields["batch"].type = payments_Batch;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CloseoutResponse;
}

