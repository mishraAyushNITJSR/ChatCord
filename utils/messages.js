const moment = require('moment-timezone');

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().tz('UTC').format() // Include time zone information
  };
}

module.exports = formatMessage;
