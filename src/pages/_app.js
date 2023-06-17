import '@/styles/PublishProject.css';
import { StatusContext } from '@/context/context';
import { useState } from 'react';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/Nav.css';
import '@/styles/globals.css';
import '@/styles/style.css';
import '@/styles/Footer.css';
import '@/styles/404.css';
import '@/styles/startups.css';
import '@/styles/admin.css';

export default function App({ Component, pageProps }) {
    const [status, setStatus] = useState(false);
    return (
        <StatusContext.Provider value={{ status, setStatus }}>
            <header>
                <Nav />
            </header>
            <Component {...pageProps} />
            <Footer />
            <Analytics />
        </StatusContext.Provider>
    );
}
