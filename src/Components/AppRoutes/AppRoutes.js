import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/home-page/HomePage";
import Dashboard from "../../Pages/dashboard/Dashboard";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}
export default AppRoutes;
