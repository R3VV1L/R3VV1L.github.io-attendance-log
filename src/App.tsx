import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Authorization } from "./pages/Authorization/Authorization.tsx";
import { Recovery } from "./pages/recovery/recovery.tsx";
import { NotFound } from "./pages/NotFound/NotFound.tsx";
import { Teachers } from "./pages/teachers/Teachers.tsx";
import { Layout } from "./components/layouts/Layout.tsx";

function App() {
  return (
    <Routes>
      <Route path="attendance" element={<Layout />} />
      <Route path="teachers" element={<Teachers />} />
      <Route path="auth" element={<Authorization />} />
      <Route path="recovery" element={<Recovery />} />
      <Route path="*" element={<NotFound />} /> {/* add the 404 route */}
    </Routes>
  );
}

export default App;
