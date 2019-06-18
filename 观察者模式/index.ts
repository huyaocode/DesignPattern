import Sentry from './Sentry';
import Farmer from './village/Farmer';
import Mine from './village/Mine';
import Army from './village/Army';

const sentry = new Sentry();
const farmer = new Farmer();
const mine = new Mine();
const army = new Army();

sentry.addNotice('鬼子进村', farmer);
sentry.addNotice('鬼子进村', mine);
sentry.addNotice('鬼子进村', army);

sentry.trigger('鬼子进村')