import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/scss/style.scss';
// Cấu hình redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import HomeTemplate from './templates/HomeTemplate';
// set up router dom 
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='detail' >
            <Route path=':id' element={<Detail />}> </Route>
          </Route>
          <Route path='*' element={<Navigate to='' />}></Route>

        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
