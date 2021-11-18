// const initialState = {
//   name: null,
//   id: null,
//   token: null,
//   isLoggedIn: false,
// };

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_USER":
//       return {
//         ...state,
//         name: action.payload.name,
//         id: action.payload.id,
//         token: action.payload.token,
//         isLoggedIn: true,
//       };
//     case "EMPTY_USER":
//       return {
//         name: null,
//         id: null,
//         token: null,
//         isLoggedIn: false,
//       };
//     default:
//       break;
//   }
//   return state;
// };
 
// export default userReducer


const initialState = {
     data:null,
    //  email:null
    // name: null,
    // id: null,
    // token: null,
    // isLoggedIn: false,
}

const userReducer = ( state = initialState, action)  => {

  switch (action.type) {
      case "ADD_USER":
          return {
            // ...state,

            ...state,
            data:action.payload,
          //  email: action.payload,
            //   id: action.payload.id,
            //   token: action.payload.token,
            //   isLoggedIn: true,
          }

          // case "ADD_USER":
          //   return {
  
          //     ...state,
          //     email:action.payload
              
          //   }
  
      default:
          break;
  }

  return state;
}

export default userReducer