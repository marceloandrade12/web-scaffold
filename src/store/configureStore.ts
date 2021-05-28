import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore, DeepPartial, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { StoreState, rootReducer, BaseState } from ".";
import { History } from "history";

export default function configureStore(
  entryPointUrl: string,
  history: History
): Store<StoreState> {
  const composeEnhancers = composeWithDevTools({});

  const initialState: DeepPartial<{
    baseState: BaseState;
  }> = {
    baseState: {
      entryPointUrl,
    },
  };

  const isDebugActive = process.env.REACT_APP_LOG || 0;

  return createStore(
    rootReducer(),
    initialState as any,
    isDebugActive
      ? composeEnhancers(applyMiddleware(routerMiddleware(history)))
      : applyMiddleware(routerMiddleware(history))
  );
}
