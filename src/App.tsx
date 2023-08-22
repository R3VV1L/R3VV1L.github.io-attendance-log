import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Authorization } from './pages/authorization/Authorization.tsx';
import { PassRecovery } from './pages/pass-recovery/PassRecovery.tsx';
import { PassSend } from './pages/pass-send/PassSend.tsx';
import { PassReset } from './pages/pass-reset/PassReset.tsx';
import { NotFound } from './pages/not-found/NotFound.tsx';
import { Groups } from './pages/groups/Groups.tsx';
import { Subgroups } from './pages/subgroups/Subgroups.tsx';
import { Students } from './pages/students/Students.tsx';
import { Teachers } from './pages/teachers/Teachers.tsx';
import { Layout } from './components/layouts/Layout.tsx';
import { Provider } from 'react-redux';
import store from './API/store.tsx';
import { Attendance } from './pages/attendance/Attendance.tsx';

function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="deanery" element={<Layout />}>
                    <Route path="teachers" element={<Teachers />} />
                    <Route path="groups" element={<Groups />} />
                    <Route path="subgroups" element={<Subgroups />} />
                    <Route path="students" element={<Students />} />
                </Route>
                <Route path="attendance" element={<Attendance />} />
                <Route path="/" element={<Navigate to="/auth" />} />
                <Route path="auth" element={<Authorization />} />
                <Route path="pass-recovery" element={<PassRecovery />} />
                <Route path="pass-send" element={<PassSend />} />
                <Route path="pass-reset" element={<PassReset />} />
                <Route path="*" element={<NotFound />} />
                {/* add the 404 route */}
            </Routes>
        </Provider>
    );
}

export default App;
