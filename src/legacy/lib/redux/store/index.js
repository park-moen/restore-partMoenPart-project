import { createStore } from 'redux';
import reducers from '@/src/legacy/lib/redux/reducers';

export default function initStore() {
  const store = createStore(
    reducers,
    // applyMiddleware(),
    // Middleware will not be applied to this sample.
  );
  return store;
}
