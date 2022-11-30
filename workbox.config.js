const path = require('path');
const config = require('./.pack11ty.config.js');

module.exports = {
  globDirectory: config.dir.dist,
  globPatterns: [
    './',
    './site.webmanifest',
    './offline-fallback/index.html',
  ],
  dontCacheBustURLsMatching: new RegExp('.+.[a-f0-9]{8}..+'),
  swSrc: path.join(config.dir.dist, 'service-worker.js'),
  swDest: path.join(config.dir.dist, 'service-worker.js'),
};