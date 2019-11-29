import React from 'react';
// import { ToastContainer } from 'react-toastify';

import { Router } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';

// import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';
// import { store, persistor } from './store';
import GlobalStyle from './styles/global';

function App() {
    return (
        <Router history={history}>
            <Routes />
            <GlobalStyle />
        </Router>
    );
}

export default App;
