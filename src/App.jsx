import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import User from "./components/User";
import UserList from "./components/UserList";
function App() {
  return (
    <Router>
      <div className="container">
        <h1>Hola</h1>
        <hr />
        <Routes>
          <Route path="/"element={<UserList/>}/>
          <Route path="/users/:id"element={<User/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
