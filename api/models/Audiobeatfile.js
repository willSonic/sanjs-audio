/**
 * audiobeatfile
 *
 * @module      ::
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    schema: true,

    attributes: {

        audiobeatfile_genre: { // This matches the autogenerated id (by the DB) in the user model (pseudo foreign-key)
            type: 'string'
        },

        audiobeatfile_name: {
            type: 'string'
        },

        audiobeatfile_path: {
            type: 'string'
        },

        audiobeatfile_type: {
            type: 'string'
        },

        audiobeatfile_size: {
            type: 'integer'
        },

        audiobeatfile_format: {
            type: 'string'
        },

        audiobeatfile_cdn_url: {
            type: 'string'
        },

        title: {
            type: 'string'
        },

        description: {
            type: 'string'
        }

    }

};