import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/home-page/HomePage";
import Dashboard from "../../Pages/dashboard/Dashboard";
// import Customers from "../../Pages/Customers";
// import Dashboard from "../../Pages/Dashbaord";
// import Inventory from "../../Pages/Inventory";
// import Orders from "../../Pages/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}
export default AppRoutes;
