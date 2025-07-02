import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CourseCategories from './components/CourseCategories';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import CourseCatalog from './components/CourseCatalog';
import CourseDetail from './components/CourseDetail';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CourseCategories />
      <CTABanner />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          {/* Auth routes without header/footer */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Dashboard route without header/footer */}
          <Route path="/dashboard/learner" element={<Dashboard />} />
          
          {/* Main app routes with header/footer */}
          <Route path="/*" element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CourseCatalog />} />
                <Route path="/course/:slug" element={<CourseDetail />} />
                <Route path="/pricing" element={<Pricing />} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;