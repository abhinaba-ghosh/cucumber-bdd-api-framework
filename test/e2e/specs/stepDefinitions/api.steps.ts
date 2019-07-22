import { apiMethods } from 'test/e2e/specs/stepFunctions';
import { logger } from 'src/utils';

let actualResponseCode: string;

export = function performAPIValidations() {
  this.Given(/^user checks api is up and running$/, async () => {
    await logger.info('api is up an running');
  });

  this.When(/^user want to get data by id="(.*)"$/, async (id: string) => {
    actualResponseCode = await apiMethods.getPostById(Number(id));
  });

  this.Then(/^user recieves "(.*)" response from the api$/, async (expectedResponseCode: string) => {
    await apiMethods.testResponse(actualResponseCode, expectedResponseCode);
  });
};
