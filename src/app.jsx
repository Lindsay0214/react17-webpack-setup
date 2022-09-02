import Home from './components/home';
import NotFoundPage from './components/NotFoundPage.jsx';
import About from './components/about';
import History from './components/history';
import Geography from './components/geography';
import Contact from './components/contact';
import FAQ from './components/faq';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/navbar.jsx';

const App = () => {
    return (
        <BrowserRouter className="h-screen pb-14 bg-right bg-cover">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/history" element={<History />} />
                <Route exact path="/geography" element={<Geography />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/faq" element={<FAQ />} />
                <Route path="**" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter >
    )
}

export default App;