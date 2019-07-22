import * as reporter from 'cucumber-html-reporter';
import * as path from 'path';

const jsonReports = path.join(process.cwd(), '/target/cucumber/json');
const htmlReports = path.join(process.cwd(), '/target/cucumber/html');
const targetJson = jsonReports + '/cucumber_report.json';

const cucumberReporterOptions = {
  jsonFile: targetJson,
  output: htmlReports + '/cucumber_reporter.html',
  reportSuiteAsScenarios: true,
  theme: 'bootstrap',
  launchReport: true,
  metadata: {
    'App Version': '0.3.2',
    'Test Environment': 'STAGING',
    Platform: 'Windows 10',
    Parallel: 'Scenarios',
    Executed: 'Remote'
  }
};

function createHTMLReport() {
  try {
    reporter.generate(cucumberReporterOptions);
  } catch (err) {
    if (err) {
      throw new Error('Failed to save cucumber test results to json file.');
    }
  }
}
createHTMLReport();
