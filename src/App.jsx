import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import FeaturedDestinations from './FeaturedDestinations';
import Signup from './Signup';
import Login from './Login';
import Footer from './Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <FeaturedDestinations />
      <Footer />
      <ul className="nav">
          <li className="nav-item">
            <a href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a href="/signup">Signup</a>
          </li>
        </ul>
    </div>
  );
};

export default App;
