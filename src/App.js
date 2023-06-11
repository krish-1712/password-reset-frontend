import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Forgot from "./components/Forgot";
import Password from "./components/Password";
import Reset from "./components/Reset";
export const url = "http://localhost:8000" 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/password" element={<Password />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="*" element={<Navigate to='/login' />} />




        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
