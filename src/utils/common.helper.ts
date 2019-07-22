import { Moment } from 'moment';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';

class CommonHelper {
  generateRandomTimeDuringWorkHours(day: Moment): Moment {
    const min = 9;
    const max = 16;
    const hour = Math.floor(Math.random() * (max - min) + min);

    return day.hour(hour).minute(0);
  }

  createDirectory(dir: string) {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  }
}

export let commonHelper = new CommonHelper();
