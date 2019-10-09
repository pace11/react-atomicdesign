import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import Login from "../Login";
import Dashboard from "../Dashboard";
import Register from "../Register";

const initialState = {
  popup: false,
  isLogin: false
};

const reducer = (state = initialState, action) => {
  if (action.type === "CHANGE_POPUP") {
    return {
      ...state,
      popup: action.value
    };
  }
  if (action.type === "CHANGE_ISLOGIN") {
    return {
      ...state,
      isLogin: action.value
    };
  }

  return state;
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
