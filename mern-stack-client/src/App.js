import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import {Route} from 'react-router-dom';
import PostMessages from "./components/PostMessages";
import Pai from "./components/Pai";
import Filho from "./components/Filho";
import { store } from "./actions/store";

import PaiClass from "./components/PaiClass";
import FilhoClass from "./components/FilhoClass";

import Modal from './components/modal.compo';
import { ModalProvider } from './components/modal.context';

import { AuthProvider } from './components/authcontexto';
import  LocaleProvider  from './components/authcontextoclass';


import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";



function App() {

  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography
            variant="h2"
            align="center">
            Post Boxx
          </Typography>
        </AppBar>
       
        <Route exact path="/" component={PostMessages} />

        <ModalProvider>
          <AuthProvider>
            <Route exact path="/pai" component={Pai} />
            <Route exact path="/filho" component={Filho} />
            <Modal />
          </AuthProvider>
        </ModalProvider>

       
        <LocaleProvider>
            <Route exact path="/paiclass" component={PaiClass} />
            <Route exact path="/filhoclass" component={FilhoClass} />
        </LocaleProvider>
       



      
        <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
   
      </Container>
    </Provider>
  );
}

export default App;
