import * as request from 'request-promise-native';
import { expect } from 'src/support/assert/expect';
import { apiProps } from 'config/api.config';
import { logger } from 'src/utils';

let userGetResponseCode: string;

class APIMethods {
  async getPostById(id: number) {
    await request.get(apiProps.endPoint + '/posts/' + id, (error, response) => {
      if (error) {
        logger.error(error);
      } else {
        logger.info('response code:', response.statusCode);
        userGetResponseCode = String(response.statusCode);
      }
    });
    return userGetResponseCode;
  }

  async testResponse(actualStatusCode: string, expectedStatusCode: string) {
    await expect(actualStatusCode, '<--Chek api response code-->').to.be.equal(expectedStatusCode);
  }
}

export let apiMethods = new APIMethods();
