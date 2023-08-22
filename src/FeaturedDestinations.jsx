import React, { useState } from 'react';
import './FeaturedDestination.css'; 

const FeaturedDestinations = () => {
  const destinations = [
    'delhi', 'Mumbai', '', '', '', ''
   
  ];

  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [tripType, setTripType] = useState('roundtrip'); 
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [travelClass, setTravelClass] = useState('economy'); 
  const filteredDestinations = destinations.filter(destination => {
    const fromMatch = fromLocation === '' || destination.toLowerCase().includes(fromLocation.toLowerCase());
    const toMatch = toLocation === '' || destination.toLowerCase().includes(toLocation.toLowerCase());
    return fromMatch && toMatch;
  });

  return (
    <section className="featured-destinations">
      <h2>Book a Ticket</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="From"
          value={fromLocation}
          onChange={e => setFromLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="To"
          value={toLocation}
          onChange={e => setToLocation(e.target.value)}
        />
        <select value={tripType} onChange={e => setTripType(e.target.value)}>
          <option value="oneway">One Way</option>
          <option value="roundtrip">Roundtrip</option>
          <option value="multicity">Multicity</option>
        </select>
        <input
          type="date"
          placeholder="Departure"
          value={departureDate}
          onChange={e => setDepartureDate(e.target.value)}
        />
        {tripType === 'roundtrip' && (
          <input
            type="date"
            placeholder="Return"
            value={returnDate}
            onChange={e => setReturnDate(e.target.value)}
          />
        )}
        <input
          type="number"
          placeholder="Travelers"
          value={travelers}
          onChange={e => setTravelers(e.target.value)}
        />
        <select value={travelClass} onChange={e => setTravelClass(e.target.value)}>
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first">First Class</option>
        </select>
        <button>Search</button>
      </div>
      <div className="destination-list">
        {filteredDestinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <h3>{destination}</h3>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;