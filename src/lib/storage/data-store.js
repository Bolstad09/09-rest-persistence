'use strict';

const memoryStorage = require('./memory.js');
const fileStorage = require('./filesystem.js');

let dataStorageModule = {};

switch (process.env.STORAGE) {
case 'filesystem':
  dataStorageModule = fileStorage;
  break;
default:
  dataStorageModule = memoryStorage;
  break;
}

module.exports = dataStorageModule;