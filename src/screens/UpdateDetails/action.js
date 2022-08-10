import axios from "axios"
const getalldetails=(data)=>{
    return(dispatch)=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',data)
        .then((resp)=>{
   
            dispatch({type:'add',payload:resp.data})
        })
    }
}

export default getalldetails