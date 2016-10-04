'use strict';
var moment = require('moment');

const exports = {}

exports.findGap = function (srvcDt, gap = 10) {
    var serviceDate = parseDate(srvcDt)
    var daysAgo = configureNumberOfDays(gap)
    var dt = currentDateFormatted()
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