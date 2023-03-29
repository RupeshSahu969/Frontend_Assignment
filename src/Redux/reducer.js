import * as types from "./actionType";
const initState={
    card:[],
    loading: false,
    error:false
}

const reducer=(state=initState,action)=>{
    const {type,payload}=action;
    
    switch(type){
        case types.CREATE_DATA_REQUEST:
            return {
                ...state,
                isLoading:true
            }
            case types.CREATE_DATA_SUCCESS:
            return {
                ...state,
                loading:false,
                card:payload,
                Error:false
            }
            case types.CREATE_DATA_FAILURE:
            return {
                ...state,
                loading:false,
                error:true,
                card:[]
            }
          

        default:
            return state

        }
    }

export {reducer}