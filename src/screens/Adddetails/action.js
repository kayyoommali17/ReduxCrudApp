import axios from "axios";

const AddDetails=()=>{
    return(dispatch,getState)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const arr=[...response.data]
            dispatch({type:'ADD_DATA',payload:arr});
        });
    }
}

export default AddDetails;