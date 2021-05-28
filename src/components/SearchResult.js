import CharWrapper from './CharWrapper';
import { Redirect } from "react-router-dom";
import React, { Component } from 'react';
const SearchResult  = () => {
    if (!localStorage.getItem("token")) {
        return <Redirect to="/login" />
      }
    return ( 
        <div>
            <h2>Results</h2>
            <CharWrapper></CharWrapper>
        </div>
     );
}
 
export default SearchResult ;