import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard"
import VendorDashboard from "./pages/VendorDashboard"
import CustomerDashboard from "./pages/CustomerDashboard"
import Navbar from "./pages/Navbar";

function App() {
  return (

    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/admin" element={<AdminDashboard />}></Route>
          <Route path="/vendor" element={<VendorDashboard />}></Route>
          <Route path="/customer" element={<CustomerDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
