import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MovieDetail from './components/MovieDetail';
import TvDetail from './components/TvDetail';
import SearchResult from './components/SearchResult';
import Footer from './components/ui/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (

    <>

        

      <Router>
        <Routes>

          <Route path="/" element={<Dashboard />} />
          
          <Route path="*" element={<Dashboard />} />

          <Route path='/movie/:id' element={<MovieDetail />} />

          <Route path='/tv/:id' element={<TvDetail />} />

          <Route path="/search/:query" element={<SearchResult />} />

          <Route path="*" element={<SpeedInsights />} />

        </Routes>
      </Router>

    <Footer />

    </>

  );
}

export default App;
