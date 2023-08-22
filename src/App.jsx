import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import FeaturedDestinations from './FeaturedDestinations';
import Signup from './Signup';
import Login from './Login';
import Footer from './Footer';
import Flights from './Flights';
import Cabs from './Cab';
import Trains from './Trains';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



const App = () => {
  return (
<div className="App">
     
    <Router>
    <Header />
      <SearchBar />
      <FeaturedDestinations />
      <Footer />
        <Routes>
         
          <Route exact path='/' element={<Flights/>} />
          <Route exact path='/' element={<Cabs/>} />
          <Route exact path='/' element={<Trains/>} />
            
         
          <Route path='/Login' element={<Login/>} />

          <Route path='/Signup' element={<Signup/>} />
         
            
          
        </Routes>
      </Router>
    
</div>
  );
};

export default App;