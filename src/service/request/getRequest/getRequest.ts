import axios from "axios";

export const getRequest = (url: string = 'http://127.0.0.1:8000/api/v1/books/all/') => {
 return  axios.get(url)
        .then((response)=>{
            return response;
        })
        .catch((err)=>{
            console.log('_err:', err)
            return err
        })
        .finally(()=>{
            console.log(`GET_request_to: ${url}`)
        })
};