import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Authorization } from "./pages/Authorization/Authorization.tsx";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword.tsx";
import { NotFound } from "./pages/NotFound/NotFound.tsx";
import { PrepodovateliTabl } from "./pages/PrepodovateliTabl/PrepodovateliTabl.tsx";
import { Layout } from "./components/Layout/Layout.tsx";

function App() {
  return (
    <Routes>
      <Route path="attendance" element={<Layout />}>
        <Route path="teacher-tab" element={<PrepodovateliTabl />} />
      </Route>
      <Route path="auth" element={<Authorization />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} /> {/* add the 404 route */}
    </Routes>
  );
}

export default App;
