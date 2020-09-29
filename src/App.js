import React from 'react';
//import logo from './logo.svg';
import './App.css';


import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from "react-router-dom";



import TopMenu from './layout/TopMenu.js';
import RouterSetting from './RouterSetting.js';







const client = new ApolloClient({
  uri: 'http://192.168.0.18:8000/graphql/', // your GraphQL Server 
});

function App() {
  return (
    <div>

      <ApolloProvider client={client}>

        <BrowserRouter basename={"/react"}>
          <TopMenu />





          <br />



          <RouterSetting />


        </BrowserRouter>
      </ApolloProvider>
    </div>

  );
}

export default App;
