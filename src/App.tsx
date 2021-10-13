import React from 'react';
import style from './App.module.scss';
import Layout from "./components/layout";
import getRequest from "./service/request/getRequest";
import postRequest from './service/request/postRequest';
import deleteRequest from './service/request/deleteRequest';


const {app, title, btn} = style;


function App() {
    return (
        <React.Fragment>
        <Layout/>
        <div className={app}>
          
            <button className={btn} onClick={(event:React.MouseEvent<HTMLButtonElement>) => {

                getRequest('http://127.0.0.1:8000/api/users').then(r => console.log('successfully:', r))
            
            }}>GET Request
            </button>

            <button className={btn} onClick={(event:React.MouseEvent<HTMLButtonElement>) => {
                
                postRequest('http://127.0.0.1:8000/api/registration',{email: 'mail@mail.mail', password:'42 response all questions'}).then(r => console.log('successfully:', r))
            
            }}>POST Request
            </button>
            
            <button className={btn} onClick={(event:React.MouseEvent<HTMLButtonElement>) => {
                deleteRequest().then(r => console.log('successfully:', r))
            }}>DELETE Request
            </button>
        </div>
        </React.Fragment>
    );
}

export default App;
