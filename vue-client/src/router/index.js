import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Social from '../pages/Social.vue';
import Media from '../pages/Media.vue';
import Snackbar from '../pages/Snackbar.vue';
import Chart from '../pages/Chart.vue';
import Mailbox from '../pages/Mailbox.vue';
import Calendar from '../pages/Calendar.vue';
import Login from '../pages/core/Login.vue';
import Error from '../pages/core/Error.vue';
import Search from '../pages/Search.vue';
import Eligibilities from '../pages/Eligibilities'
import Letter from '../pages/Letter.vue'
import Roster from '../pages/Roster'



Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        breadcrumb: [
          { name: 'Dashboard' }
        ]
      }
    },
    {
      path: '/mailbox',
      name: 'Mailbox',
      component: Mailbox,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Mailbox' }
        ]
      }
    },
    {
      path: '/snackbar',
      name: 'Snackbar',
      component: Snackbar,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Snackbar' }
        ]
      }
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Calendar' }
        ]
      }
    },
    {
      path: '/social',
      name: 'Social',
      component: Social,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Social' }
        ]
      }
    },
    {
      path: '/media',
      name: 'Media',
      component: Media,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Media' }
        ]
      }
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Chart' }
        ]
      }
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/search-certificates',
      name: 'Search Certification',
      component: Search,
      meta: {
        breadcrumb: [
          { name: 'Home', href: 'Dashboard' },
          { name: 'Certifications' },
          { name: 'Search' }
        ]
      }
    },
    {
      path: '/eligibilities',
      name: 'Eligibilities',
      component: Eligibilities,
      meta: {
        breadcrumb: [
          { name: 'Home', href: 'Dashboard' },
          { name: 'Eligibilities' },
          { name: ' Search Eligibility' }
        ]
      }
    },
    {
      path: '/roster',
      name: 'Score Roster',
      component: Roster,
      meta: {
        breadcrumb: [
          { name: 'Home', href: 'Dashboard' },
          { name: 'Score Roster' },
          { name: ' Search Score Roster' }
        ]
      }
    }
    ,
    {
      path: '/list-letters',
      name: 'List Letters',
      component: Letter,
      meta: {
        breadcrumb: [
          { name: 'Home', href: 'Dashboard' },
          { name: 'Letter' }
        ]
      }
    }
  ]
});
