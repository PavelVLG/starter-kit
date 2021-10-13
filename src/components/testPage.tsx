import React from 'react';
import {getRequest, postRequest} from "../api";
import {Button} from "@mui/material";





export const TestPage: React.FC = () => {
    return (

        <div style={{marginLeft: '40%'}}>
            <Button variant="contained" color="success" onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                getRequest('https://jsonplaceholder.typicode.com/todos/1').then(r => console.log('successfully:', r))
            }}>GET Request
            </Button>

            <Button  style={{marginLeft: '1%'}} variant="contained" color="secondary" onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                postRequest('http://127.0.0.1:8000/api/registration', {
                    email: 'mail@mail.mail',
                    password: '42 response all questions'
                }).then(r => console.log('successfully:', r))
            }}>POST Request
            </Button>
        </div>

    );
}