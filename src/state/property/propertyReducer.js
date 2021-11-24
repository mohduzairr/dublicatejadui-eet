const initialState = {
    properties:[],
    selectedCity:"Delhi",
    selectedLocation:""
}
console.log("llllllll"+initialState.selectedCity)
const propertyReducer = ( state = initialState, action)  => {

    switch (action.type) {
        case "SAVE_PROPERTIES":
            return {
                ...state,
                properties:action.payload
            }
        case "SAVE_SELECTED_CITY":
            return {
                ...state,
                selectedCity:action.payload
            }

         case "SAVE_SELECTED_LOCATION":
             return {
                 ...state,
                 selectedLocation:action.payload
             }   
    
        default:
            break;
    }

    return state;
}

export default propertyReducer