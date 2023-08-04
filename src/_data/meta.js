const package = require('../../package.json');

module.exports = {
  pkv: package.version || 'v1',
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Home',
  siteDescription:
    "Personal website based on 11ty, also based on the workflow suggested by Andy Bell's https://buildexcellentwebsit.es/.",
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Mario Pisaturo',
  authorEmail: '',
  authorWebsite: '',
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    firma: 'Mario Pisaturo',
    street: '123 Main St.',
    city: 'Ciudad',
    state: 'Estado',
    zip: '12345',
    mobileDisplay: '',
    mobileCall: ' ',
    email: '',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
