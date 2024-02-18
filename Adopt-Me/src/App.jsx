import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havenese"/>
      <Pet name="Pepper" animal="Bird" breed="Cockatiel"/>
      <Pet name="Doink" animal="Cat" breed="Mixed"/> */}
      <SearchParams/>
    </div>
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
