import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../Style/foodPlace.module.css';

const foodPlaces = [
  {
    name: 'The Chicken Shack',
    image: '/path-to-image/chicken-shack.png',
  },
  {
    name: 'Sweet Treats Cafe',
    image: '/path-to-image/sweet-treats.png',
  },
  {
    name: 'Taco Town',
    image: '/path-to-image/taco-town.png',
  },
];

const FoodPlace = () => {
  return (
    <div className={styles.foodPlaceContainer}>
      <Navbar />

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Search and Filter Section */}
        <div className={styles.searchFilterContainer}>
          <input type="text" placeholder="Search" className={styles.searchInput} />
          <select className={styles.filterSelect}>
            <option>Filter</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
        </div>

        {/* Food Places List */}
        <div className={styles.foodList}>
          {foodPlaces.map((place, index) => (
            <div key={index} className={styles.foodItem}>
              <img src={place.image} alt={place.name} className={styles.foodImage} />
              <div className={styles.foodDetails}>
                <h2 className={styles.foodName}>{place.name}</h2>
                <button className={styles.viewButton}>View</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FoodPlace;
