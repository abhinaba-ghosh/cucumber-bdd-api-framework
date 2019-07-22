import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
const jsonReports = process.cwd() + '/target/cucumber/json';
const testLogs = process.cwd() + '/target/logs';
/**
 * @param  {string} dir
 */
function createDirectory(dir: string) {
  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir);
  }
}
createDirectory(jsonReports);
createDirectory(testLogs);
