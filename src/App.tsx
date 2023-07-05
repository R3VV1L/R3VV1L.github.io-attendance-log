import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Authorization } from "./pages/Authorization/Authorization.tsx";
import { Attendance } from "./pages/Attendance/Attendance.tsx";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword.tsx";
import { NotFound } from "./pages/NotFound/NotFound.tsx";
import { PrepodovateliTabl } from "./pages/PrepodovateliTabl/PrepodovateliTabl.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Authorization />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/teacher-tab" element={<PrepodovateliTabl />} />
      <Route path="*" element={<NotFound />} /> {/* add the 404 route */}
    </Routes>
  );
}

export default App;
