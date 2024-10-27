import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productApi";
import { ordersApi } from "./services/ordersApi";
import { customersApi } from "./services/customerApi";
// ...

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [customersApi.reducerPath]:customersApi.reducer
  }, // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware,ordersApi.middleware,customersApi.middleware),

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
