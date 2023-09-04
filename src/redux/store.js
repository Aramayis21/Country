import { createStore } from "redux";

const initialState = {
    countries : [],
    text : ''
}

 const reducer = (state = initialState,action) => {
    switch(action.type){
        case 'get_text':
         return{
            ...state,
            text : action.payload
         }
         case 'get_countries':
            return{
                ...state,
                countries : action.payload
            }
            default :
            return{
                ...state
            }
    }
}



const store = createStore(reducer)

export default store