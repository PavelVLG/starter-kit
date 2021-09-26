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
                getRequest().then(r => console.log('successfully:', r))
            }}>GET Request
            </button>
            <button className={btn} onClick={(event:React.MouseEvent<HTMLButtonElement>) => {
                postRequest('http://127.0.0.1:8000/api/v1/books/book/create/',{title:'Заголовок', content: 'Контент', user: 1, progress: 1}).then(r => console.log('successfully:', r))
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
