import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import CreateSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import { fetchCollectionsStart } from "./shop/shop.sagas";

const sagaMiddleware = CreateSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

// export default { store, persistStore };
