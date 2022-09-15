import { configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from '../Reducers/userReducer'
const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, userReducer)
  

  const store = configureStore({
    reducer: {
      persistedReducer
    },
  })

  const persistor = persistStore(store)

  export { store, persistor }