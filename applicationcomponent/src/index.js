import React from 'react';
import ReactDom from 'react-dom';

const App=()=>{
    return (
      <React.Fragment>
        <h1>Hello babe</h1>
        <h2>Hi Babe</h2>
      </React.Fragment>
    );
};
ReactDom.render(<App/>, document.getElementById('root'));