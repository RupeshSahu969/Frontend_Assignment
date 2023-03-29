import * as types from "./actionType";
import axios from "axios"


//getData
 export const getData=(params)=>(dispatch) => {
    dispatch({type:types.CREATE_DATA_REQUEST});
    return axios.get("https://sdfsfd.onrender.com/users_video",params)
    .then((res)=>{
        // console.log(res)
        dispatch({type:types.CREATE_DATA_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        
        dispatch({type:types.CREATE_DATA_FAILURE,payload:err});

    })
}

//postData
export const postDataRequest=()=>{
    return{
        type : types.ADD_DATA_REQUEST,
        
    }
  }
  export const postDataSucess=(payload)=>{
    return{
        type : types.ADD_DATA_SUCCESS,
        payload,
    }
  }
  export const postDataFailure=(payload)=>{
    return{
        type : types.ADD_DATA_FAILURE,
        payload,
    }
  }
      
//editData
export const UpdateData=(id,payload)=>(dispatch)=>
{
    dispatch({type:types.EDIT_DATA_REQUEST});
    return axios.patch(`https://sdfsfd.onrender.com/users_video/${id}`,payload)
    .then((res)=>{
        console.log(res)
        dispatch({type:types.EDIT_DATA_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:types.EDIT_DATA_FAILURE,payload:err});
    })

}

export const deleteData=(id)=>(dispatch)=>
{
    dispatch({type:types.DELETE_DATA_REQUEST});
    return axios.delete(`https://sdfsfd.onrender.com/users_video/${id}`)
    .then((res)=>{
        dispatch({type:types.DELETE_DATA_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:types.DELETE_DATA_FAILURE,payload:err});
    })

}
