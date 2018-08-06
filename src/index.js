import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

import { ReactArgio } from './ReactArgio';
import { Normalize, DefaultStyles } from './styles/index';

/**
 * Set default global CSS styles
 * - Normalized stylesheets
 * - Default app styles
 */
injectGlobal`
  ${Normalize}
  ${DefaultStyles}
`;

render(<ReactArgio />, document.getElementById('root'));
registerServiceWorker();
