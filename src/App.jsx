import './App.css';
import Footer from './components/Footer.jsx';
import Galery from './components/Galery.jsx';
import Header from './components/Header.jsx';
import MainPage from './pages/MainPage.jsx';
import FormContacto from './components/FormContacto.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/galeria" element={<Galery/>} />
        <Route path="/contacto" element={<FormContacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
