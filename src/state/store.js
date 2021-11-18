// import {combineReducers,createStore} from "redux";
// import {persistReducer} from "redux-persist";
// import storage from "redux-persist/lib/storage"
// import hardSet from "redux-persist/es/stateReconciler/hardSet";
// import userReducer from "./user/userReducer";


// const persistConfig={
//     key:"root",
//     storage,
//     stateReconciler:hardSet,
// }

// const rootReducer=combineReducers({
//     user:userReducer
// })

// const persistedReducer=persistReducer(persistConfig,rootReducer)

// const store=createStore(persistedReducer)

// export default store;



import { combineReducers,createStore} from "redux"
import userReducer from "./user/userReducer"
import propertyReducer from "./property/propertyReducer"



const rootReducer = combineReducers({
     user:userReducer,
 property:propertyReducer
});


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;