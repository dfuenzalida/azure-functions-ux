import { initializeIcons, loadTheme } from '@fluentui/react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import App from './pages/App';
import './polyfills';
import { lightTheme } from './theme/light';
import Url from './utils/url';

initializeIcons(Url.getParameterByName(null, 'officeFabricIconsCdn') || undefined);

loadTheme(lightTheme); // make sure we load a custom theme before anything else, custom theme has custom semantic colors

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
