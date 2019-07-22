import { configure, getLogger } from 'log4js';

configure({
  appenders: [
    { type: 'log4js-protractor-appender', category: 'protractorLog' },
    {
      type: 'file',
      filename: './target/logs/test.log',
      category: 'protractorLog'
    }
  ]
});
export const logger = getLogger('protractorLog');
