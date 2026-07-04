import * as React from 'react';

export const App = React.memo(() => <div>{'Hello, React!'}</div>);

App.displayName = 'App';
