import axios from "axios";
import {I_Regisrtration} from '../interfaces'


export const postRequest = (url: string = 'http://localhost:8000/api/create/', data: I_Regisrtration) => {
 return  axios.post(url, data)
 .catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
};