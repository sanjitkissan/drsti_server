'use strict';

/**
 * bringing-office service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bringing-office.bringing-office');
