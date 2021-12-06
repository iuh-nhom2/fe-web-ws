import React from 'react';
import { lazyImport } from '../utils'

import { Redirect } from 'react-router-dom'

export default [
  // {
  //   menuKey: `login`,
  //   path: '/login',
  //   component: lazyImport(`login`),
  //   extract: true,
  // },
  {
    menuKey: `chatList`,
    path: '/chatList',
    component: lazyImport(`chatList`),
    extract: true,
    requiredLogin: true,
  },
  {
    menuKey: `chatScreen`,
    path: '/chatScreen',
    component: lazyImport(`chatScreen`),
    extract: true,
    requiredLogin: true,
  },

  {
    menuKey: `index`,
    path: '/',
    component: () => <Redirect from={'/'} to={'/chatList'}  />
  }
];