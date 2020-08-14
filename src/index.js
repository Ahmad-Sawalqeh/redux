import React from "react";
import { render } from "react-dom";
import myStore from './redux/store/store.js';
import { Provider } from "react-redux";
import App from './app.js';

/*
benefit of Redux:
1- single source of truth
2- Handle complexity in large projects
3- Used in differant framworks/technologies in projects
4- helps to improve performance of re rendering issue, where with context will trigger re render any component you using it any time context updated
5- time travel using redux-dev-tool
6- predictability (pure functions - actions/reducers)
7- ease for testing
8- community support
9- browser DevTool

diffrents from contextAPI hook:
=> contextAPI:
1- bulit directly into React
2- no need to pass the state as props to components
3- does NOT have debugging tools and middlewares

=> redux:
1- 3rd party library (external package)
2- passing state as props to components
3- can use debugging tools and middlewares to track state changes
*/

const Main = () => {
    return ( <
        Provider store = { myStore } >
        <
        App / >
        <
        /Provider>
    );
};

render( < Main / > , document.getElementById("root"));