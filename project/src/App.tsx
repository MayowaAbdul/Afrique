import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Newsfeed from './pages/Newsfeed';
import Magazine from './pages/Magazine';
import TV from './pages/TV';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';


// Wrapper component for page transitions
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            
            <Route path="/newsfeed" element={<PageWrapper><Newsfeed /></PageWrapper>} />
            
            <Route path="/magazine" element={<PageWrapper><Magazine /></PageWrapper>} />
            
            <Route path="/tv" element={<PageWrapper><TV /></PageWrapper>} />
            
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
            
            <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
            
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />

            <Route path="/login" element={<PageWrapper><Login /></PageWrapper>}/>

            <Route path="/signup" element={<PageWrapper><SignUp /></PageWrapper>} />

            <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
            
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;