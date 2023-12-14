import Home from '../views/pages/landing-page';
import Check from '../views/pages/check';
import Tips from '../views/pages/tips';
import DetailTips from '../views/pages/detail-tips';
import Forum from '../views/pages/forum';
import ContactUs from '../views/pages/contact-us';
import Login from '../views/pages/login';
import SignUp from '../views/pages/signup';
import DetailArticle from '../views/pages/detail-article';
import Test from '../views/pages/test';
import Profile from '../views/pages/profile';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/check': Check,
  '/tips': Tips,
  '/detail-tips/:id': DetailTips,
  '/forum': Forum,
  '/contact-us': ContactUs,
  '/login': Login,
  '/signup': SignUp,
  '/detail-article/:id': DetailArticle,
  '/test': Test,
  '/profile': Profile,
};

export default routes;
