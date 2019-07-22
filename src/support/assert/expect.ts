import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as cahiString from 'chai-string';

chai.use(chaiAsPromised);
chai.use(cahiString);

export const expect = chai.expect;
