import {Base, HomePage, About, Contact, Archive} from './components/index';
import {DashboardPage, LoginPage, SignUpPage} from './containers/index';

import Auth from './modules/Auth';


const routes = {

  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    },
    {
     path : '/blog',
     component: Archive
    },
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        replace('/');
      }
    }

  ]
};

export default routes;
