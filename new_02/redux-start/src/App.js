import "./App.css";
// import { useContext, useEffect, useState } from "react";
// import { addTodo } from "./redux/actions";
// import useReduxState from "./hooks/useReduxState";
// import useReduxDispatch from "./hooks/useReduxDispatch";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
// import TodoListContainer from "./containers/TodoListContainer";
// import TodoFormContainer from "./containers/TodoFormContainer";
// import UserListContainer from "./containers/UserListContainer";
import { Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import history from "./history";
import { ConnectedRouter } from "connected-react-router";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/todos" exact component={Todos} />
      <Route path="/users" exact component={Users} />
    </ConnectedRouter>
  );
}

export default App;
