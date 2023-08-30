import { Header } from '../header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/Footer.tsx';

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
