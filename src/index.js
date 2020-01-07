import {
  useDeps as _useDeps
} from 'biz-react-simple-di';

import {
  compose as _compose,
  composeWithTracker as _composeWithTracker,
  composeWithPromise as _composeWithPromise,
  composeWithObservable as _composeWithObservable,
  composeAll as _composeAll,
  disable as _disable,
} from 'biz-react-komposer';

let app;
import App from './app';

// export this module's functions
export const createApp = (...args) => {
  app = new App(...args);
  return app;
};

export const injectDeps = (...args) => {
  return app.injectDeps(...args);
};

// export react-simple-di functions
export const useDeps = _useDeps;

// export react-komposer functions
export const compose = _compose;
export const composeWithTracker = _composeWithTracker;
export const composeWithPromise = _composeWithPromise;
export const composeWithObservable = _composeWithObservable;
export const composeAll = _composeAll;
export const disable = _disable;
