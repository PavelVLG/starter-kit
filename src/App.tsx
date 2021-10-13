import React from 'react';
import {TestPage} from "./components/testPage"
import Layout from "./components/layout";
import Form from "../src/components/form"

function App() {
    return (
        <React.Fragment>
            <Layout/>
            <TestPage/>
            <Form/>
        </React.Fragment>
    );
}

export default App;
