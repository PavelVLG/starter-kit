import React from "react";
import useTypedSelector from "../../service/hooks/useTypedSelector";


export const Layout: React. FC = () =>{
    
    const state = useTypedSelector(state => state.initState.loading)
  

    console.log(state)
  

    return(
        <h3 style={{margin: '2rem 0 0 2rem' }}> Layout </h3>
    )

};