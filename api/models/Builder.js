/**
 * Builder.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/* Below data model is created to store the homebuilder contact information
* builder_id is the primaryKey for the table but I am hiding from UI
* rest of the fields are going to display on UI*/
module.exports = {

  attributes: {
    builder_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    company_name: {
      type: 'string',
      required: true,
      minLength: 4,
      maxLength: 15
    },
    contact_first_name: {
      type: 'string',
      required: true,
      minLength: 4,
    },
    contact_last_name: {
      type: 'string',
      maxLength: 10
    },
    contact_phone_number: {
      type: 'string',
      regex: /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/,
      maxLength: 12
    },
    email_address: {
      type: 'string',
      email: true
    },
    zip_code: {
      type: 'integer'
    }
  },
  autoPK: false //it stops making an auto primaryKey
};
