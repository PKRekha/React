import React from 'react';
import ReactDom from 'react-dom';
import HeaderNews from './newsComponent/header';

const App=()=>{
    return (
      <React.Fragment>
        <HeaderNews/>   
      </React.Fragment>
    );
};
ReactDom.render(<App/>, document.getElementById('root'));