'use strict';

/**
 * newspiece service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newspiece.newspiece');
