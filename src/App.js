import React, {Suspense} from 'react';

import {
  Route,
  Switch,
  Redirect } from 'react-router-dom';

import Header from './components/header';
import Loader from './components/loader';
import LoadingBar from 'react-redux-loading-bar';

import { connect } from 'react-redux';

import { appState, appDispatch } from './AppHelper';

import routes from './routes';
import './App.css';

function App(props) {

  const appRoutes = routes(props);


// dynamic routes added.
  function renderMainLayout() {
    return appRoutes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        render={route.main}>
      </Route>
    ));
  }


  return (
    <div className="App">
      <LoadingBar className='App-loader'/>
      <div className='app-container'>
        <Header name="Header title"/>
        <main className='main-app-container flex'>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Redirect exact from='/' to='/landing-page' />
                <Route render={() => ( renderMainLayout() )}/>
              </Switch>
            </Suspense>
        </main>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => appState(state);

const mapDispatchToProps = (dispatch) => appDispatch(dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
