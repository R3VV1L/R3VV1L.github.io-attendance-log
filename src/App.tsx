import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Authorization } from "./pages/authorization/authorization.tsx";
import { Recovery } from "./pages/recovery/recovery.tsx";
import { NotFound } from "./pages/not-found/not-found.tsx";
import { Groups } from "./pages/groups/groups.tsx";
import { Subgroups } from "./pages/subgroups/subgroups.tsx";
import { Students } from "./pages/students/students.tsx";
import { Teachers } from "./pages/teachers/teachers.tsx";
import { Layout } from "./components/layouts/layout.tsx";

function App() {
  return (
    <Routes>
      <Route path="auth" element={<Authorization />} />
      <Route path="recovery" element={<Recovery />} />
      <Route path="*" element={<NotFound />} /> {/* add the 404 route */}
      <Route path="attendance" element={<Layout />} />
      <Route path="groups" element={<Groups />} />
      <Route path="subgroups" element={<Subgroups />} />
      <Route path="students" element={<Students />} />
      <Route path="teachers" element={<Teachers />} />
    </Routes>
  );
}

export default App;
