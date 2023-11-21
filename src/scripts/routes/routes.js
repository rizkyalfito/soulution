import Home from '../views/pages/home';
import Check from '../views/pages/check';
import Tips from '../views/pages/tips';
import Forum from '../views/pages/forum';
import ContactUs from '../views/pages/contact-us';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/check': Check,
  '/tips': Tips,
  '/forum': Forum,
  '/contact-us': ContactUs,
};

export default routes;
