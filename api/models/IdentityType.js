/**
 * IdentityType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#/documentation/concepts/ORM/Models.html
 */

module.exports = {
  autoPk: false,

  attributes: {
    code:  {
      type:     'string',
      size:     32,
      required: true,
      unique:   true
    },

    label: {
      type:     'string',
      required: true
    }

  }
};

