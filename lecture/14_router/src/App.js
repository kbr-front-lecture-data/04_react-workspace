
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigator from './components/Navigator';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navigator 컴포넌트로 분리 */}
        {/* 
          <nav style={{
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderBottom: '1px solid #ccc',
          }}>
            <Link to="/" style={{marginRight: '20px'}}>홈</Link>
            <Link to="/about" style={{marginRight: '20px'}}>소개</Link>
            <Link to="/contact" style={{marginRight: '20px'}}>연락처</Link>
          </nav> 
        */}
        <Navigator />
        <main style={{padding: '20px'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
