import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Authorization } from "./pages/authorization/Authorization.tsx";
import { Recovery } from "./pages/recovery/Recovery.tsx";
import { NotFound } from "./pages/not-found/NotFound.tsx";
import { Groups } from "./pages/groups/Groups.tsx";
import { Subgroups } from "./pages/subgroups/Subgroups.tsx";
import { Students } from "./pages/students/Students.tsx";
import { Teachers } from "./pages/teachers/Teachers.tsx";
import { Layout } from "./components/layouts/Layout.tsx";
import { Provider } from "react-redux";
import store from "./API/store.tsx";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="attendance" element={<Layout />}>
          <Route path="teachers" element={<Teachers />} />
          <Route path="groups" element={<Groups />} />
          <Route path="subgroups" element={<Subgroups />} />
          <Route path="students" element={<Students />} />
        </Route>
        <Route path="auth" element={<Authorization />} />
        <Route path="recovery" element={<Recovery />} />
        <Route path="*" element={<NotFound />} /> {/* add the 404 route */}
      </Routes>
    </Provider>
  );
}

export default App;
