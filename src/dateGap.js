'use strict';
var moment = require('moment');


function findGap(srvcDt) {
  var gap = 10
  var dt = currentDateFormatted()
  var serviceDate = parseDate(srvcDt)
  var daysAgo = configureNumberOfDays(gap)
  if (daysAgo <= serviceDate && serviceDate <= dt) {
    return true
  } else {
    return false
  }
}

function parseDate(date) {
  var parsedDate = new Date(date);
  return moment.parseZone(parsedDate).utc().format('L');
}

function configureNumberOfDays(gap) {
  return moment().subtract(gap, 'days').calendar()
}
function currentDateFormatted() {
  return moment().format('L')
}