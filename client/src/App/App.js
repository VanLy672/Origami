import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Main from './Main/Main';
import Aside from '../Aside/Aside';
import Posts from '../publications/Posts/Posts';
import CreatePost from '../publications/CreatePost/CreatePost';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function render(title, Cmp) {
  return function ({ match }) {
    // debugger;
    return <Main title={title}><Cmp match={match} /></Main>
  };
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="Container">
          <Aside />
          <Switch>
            <Route path="/" exact><Redirect to="/posts" /></Route>
            <Route path="/posts" render={render('Alyz', Posts)} />
            <Route path="/create-posts">
              <Main title="Create Post"><CreatePost /></Main>
            </Route>
            <Route path="/profile">
              <Main title="Profile"><Profile /></Main>
            </Route>
            <Route path="/login">
              <Main title="Login"><Login /></Main>
            </Route>
            <Route path="/register">
              <Main title="Register"><Register /></Main>
            </Route>
            <Route path="*">
              <Main title="Something went wrong..."><NotFound /></Main>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
