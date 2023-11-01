import { Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './layout/Home';
import Films from './layout/Films';
import PopularFilms from './layout/PopularFilms';

function App() {

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Router
                        path="/"
                        element={<Home />}
                    />
                    <Router
                        path="/films"
                        element={<Films />}
                    />
                    <Router
                        path="/popularfilms"
                        element={<PopularFilms />}
                    />
                </Routes>
            </main>
            <footer></footer>
        </>
    );
}

export default App;
