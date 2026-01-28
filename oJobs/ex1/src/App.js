import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import SearchBar from './components/SearchBar/SearchBar'; // Import mới
import Featured from './components/Featured/Featured';
import Statistics from './components/Statistics/Statistics';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SearchBar /> {/* Thanh tìm kiếm nằm ở đây */}
      <Featured />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;