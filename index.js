import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store'

class HelloMessage extends React.Component {

    render() {
        console.log(store);
        return <Provider store={store}>
            <div>Hello minimal redux</div>
        </Provider>
    }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);