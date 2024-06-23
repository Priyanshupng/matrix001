import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from './donors-Img/donor-logo.svg';
import donationImage from './donors-Img/donation.jpg';
import bookImage from './donors-Img/books.jpg';

const Home = () => {
    return (
        <div>
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="logo-icon" className="logo-icon" />
            <span className="logo-text">THE DONORS</span>
          </div>
          
        </div>
      </header>

      <div className="nav-container">
        <nav className="nav-section">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Inspirations</a>
          <a href="#" className="nav-link">Contact Us</a>
        </nav>
      </div>

      <div className="content">
        <div className="texts">
          <h2 className="text-1">Come with Us</h2>
          <h3 className="text-2">to help privileged.</h3>
          <p className="text-3">
            Our team is dedicated to fostering inclusive environments by providing top-tier resources and support to privileged individuals, ensuring they maximize their potential and contribute meaningfully to society. We offer specialized services that empower the privileged to leverage their advantages responsibly, promoting a culture of empathy and excellence.
          </p>
        </div>

        <div className="image-container">
          <img src={donationImage} alt="cover-image" className="cover-image" />
        </div>
      </div>

      <main className="main">
        <div className="product-heading">
          <p className="product-heading-text">----- Items for Donation -----</p>
        </div>
        <div className="home-products-container">
          <div className="products">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div className="product-X" key={index}>
                <div className="product-icon-container">
                  <img src={bookImage} alt="" className="product-X-image" />
                </div>
                <div className="product-info">
                  <div className="product-title">Books</div>
                  <div className="product-description">Lorem ipsum dolor sit, amet consectetur</div>
                </div>
                <div className="accept-button-container">
                  <a href="#accept-product" className="accept-button">
                    Accept Item
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="explore-button-container">
          <a href="Products.html" className="explore-button">
            Explore More
          </a>
        </div>
      </main>

      <div className="heading-end">
        By offering these gifts, we wish to express our gratitude for your ongoing support and commitment to excellence. We hope these donations serve as a token of our appreciation and reinforce the bond we share with our privileged community. Please accept these items with our heartfelt thanks and best wishes.
      </div>

      <footer className="footer">
        <p className="footer-text">&copy; 2024 The Donors. All rights reserved.</p>
      </footer>
    </div>
    );
}

export default Home;
