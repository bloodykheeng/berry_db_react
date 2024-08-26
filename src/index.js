import ReactDOM from 'react-dom';

// third party
import { BrowserRouter } from 'react-router-dom';

// project imports
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { CustomizationProvider } from 'context/CustomizationContext';

//
import 'index.css';
import { StyledEngineProvider } from '@mui/material/styles';

// style + assets
import 'assets/scss/style.scss';

// ==============================|| REACT DOM RENDER  ||============================== //

ReactDOM.render(
    <BrowserRouter>
        <CustomizationProvider>
            <StyledEngineProvider injectFirst>
                <App />
            </StyledEngineProvider>
        </CustomizationProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
