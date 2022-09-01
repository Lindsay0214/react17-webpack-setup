import Home from './components/home';
import NotFoundPage from './components/NotFoundPage.jsx';
import Users from './components/users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route path="**" component={NotFoundPage} />
            </Routes>
        </BrowserRouter >
    )
}

export default App;