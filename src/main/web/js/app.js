
import   '../css/app.css';
import * as React from "react/lib/React";
import * as ReactDOM from "react/lib/ReactDOM";


var arr = [
    <h1 key="1">Hello world!</h1>,
<h2 key="22">cheers </h2>,
];
ReactDOM.render(
<div>{arr}</div>,
    document.getElementById('main')
);
