
// import { PersistGate } from "redux-persist/integration/react";
   import Routes from "./routes";
// import {persistStore} from "redux-persist"
   import store from "state/store";
   import {Provider} from "react-redux"

// import { useEffect, useState } from "react";
// import crossBrowserListener from "./utils/redux-persist-listner";
// import storage from "redux-persist/lib/storage"; 
// import hardSet from "redux-persist/lib/stateReconciler/hardSet";

function App() {
  // const [isLoaded, setIsLoaded] = useState(false)

  // const persistConfig = {
  //   key: "root",
  //   storage,
  //   stateReconciler: hardSet,
  // };

  // const persister=persistStore(store);
  // store.persister=persister;

  // window.addEventListener(
  //   "storage",
  //   crossBrowserListener(store, persistConfig)
  // );

  // if (!isLoaded) {
  //   return (
  //     <div className="bg-1" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }} ><h2 style={{ color: "#fff" }}>Welcome to ekShop Warehouse POS</h2>
  //       <div style={{ color: "white", position: "absolute", bottom: 10, left: "45%" }}>Version 1.0.1</div>
  //     </div>
  //   )
  // }


  // useEffect(() => {
  //   document.addEventListener('contextmenu', (e) => {
  //     e.preventDefault();
  //   });
  //   setTimeout(() => {
  //     setIsLoaded(true)
  //   }, 2000);
  // }, [])



  return (
    // <PersistGate persistor={persister}>
    <Provider  store={store}>
    <div className="App">
      <Routes />

    </div>
    </Provider>
    // </PersistGate>
  );
}

export default App;
