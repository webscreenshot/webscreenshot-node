const hmacSha256 = require('crypto-js/hmac-sha256');
const qs = require('qs');

const DEFAULT_ENDPOINT = 'https://api.webscreenshot.io/v1/';

module.exports = (apikey, apisecret = null, prefix = DEFAULT_ENDPOINT) => {
  return {
    screenshotUrl: options => {
      const query = qs.stringify(options);
      if (apisecret) {
        const token = generateApiToken(query, apisecret);
        return `${prefix}${apikey}/${token}/${options.format || 'png'}?${query}`;
      } else {
        return `${prefix}${apikey}/${options.format || 'png'}?${query}`;
      }
    }
  };
};

const generateApiToken = (queryString, secret) => {
  return hmacSha256(queryString, secret);
};
