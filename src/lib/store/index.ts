import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { productsApi } from "./productsApi"
import cartReducer from "./cartSlice"
import preferencesReducer from "./preferencesSlice"
import searchReducer from "./searchSlice"

export const makeStore = () =>
  configureStore({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      cart: cartReducer,
      preferences: preferencesReducer,
      search: searchReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]

export const Wrapper = createWrapper<AppStore>(makeStore)

