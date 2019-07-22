require('ts-node/register');
require('tsconfig-paths/register');
var common = [
    '--format json:./target/cucumber/json/cucumber_report.json',
    // '--parallel 20',
    '--require ./transform/'
].join(' ');

module.exports = {
    default: common
};