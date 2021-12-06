import {lazy} from 'react';

export const lazyImport = (
  filename,
) => (
  lazy(() => (
     import(`../pages/${filename}`)
  ))
)

export const getTokenStorage = _ => {
  return window.localStorage.getItem('token');
}