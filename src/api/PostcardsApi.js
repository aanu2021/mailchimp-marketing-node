/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.19
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */



var ApiClient = require('../ApiClient');

/**
 * Postcards service.
 * @module api/PostcardsApi
 */

/**
 * Constructs a new PostcardsApi. 
 * @alias module:api/PostcardsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * List postcards
   * Get all of a user's postcards.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.sortDir Determines the order direction for sorted results.
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
   */
  this.getAllWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
      'sort_dir': opts['sortDir'],
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'count': opts['count']
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/postcards', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List postcards
   * Get all of a user's postcards.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.sortDir Determines the order direction for sorted results.
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
   */
  this.getAll = function(opts) {
    return this.getAllWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
