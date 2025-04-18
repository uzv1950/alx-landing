const path = require('path');

/** @type {import('next-i18next').I18NConfig } */
const i18n = {
  defaultLocale: 'es',
  locales: ['en', 'es'],
  localeDetection: false,
};

module.exports = {
  i18n: i18n,
  localePath: path.resolve('./public/locales')
};
