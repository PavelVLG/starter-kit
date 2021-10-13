import axios from "axios";
import {I_Regisrtration} from './interfaces'

export const getRequest = (url = 'http://127.0.0.1:8000/api/v1/books/all/') => {
    return axios.get(url)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log('_err:', err)
            return err
        })
        .finally(() => {
            console.log(`GET_request_to: ${url}`)
        })
};


export const postRequest = (url= 'http://localhost:8000/api/create/', data: I_Regisrtration) => {
    return axios.post(url, data)
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

/*
export const deleteRequest = (url = 'http://127.0.0.1:8000/api/v1/books/book/detail/4/') => {
    return axios.delete(url)
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
};*/
