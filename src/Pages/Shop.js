import React from 'react';
import '../Components/Styles/Shop.css';
import Footer from '../Components/Global/Footer';
import { FaBars, FaShoppingCart, FaHeart } from 'react-icons/fa';
import bellPepperImg from '../Components/Assets/Products/bell-pepper.jpg';
import strawberryImg from '../Components/Assets/Products/strawberry.jpg';
import greenBeansImg from '../Components/Assets/Products/green-beans.jpg';
import purpleCabbageImg from '../Components/Assets/Products/purple-cabbage.jpg';
import tomatoeImg from '../Components/Assets/Products/TOMATOE.jpg';
import applesredImg from '../Components/Assets/Products/Apples-red.jpg';
import fruitjuiceImg from '../Components/Assets/Products/Fruit-Juice.jpg';
import brocolliImg from '../Components/Assets/Products/Brocolli.jpg';

const Shop = () => {
  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Products</h2>
      </div>
      <div className="products-categories">
        <button className="products-category-btn active">All</button>
        <button className="products-category-btn">Vegetables</button>
        <button className="products-category-btn">Fruits</button>
        <button className="products-category-btn">Juice</button>
        <button className="products-category-btn">Dried</button>
      </div>
      <div className="products-grid">
        <div className="product-card">
          <div className="product-discount">30%</div>
          <img src={bellPepperImg} alt="Bell Pepper" className="product-image" />
          <h3 className="product-name">Bell Pepper</h3>
          <p className="product-price-old">$120.00</p>
          <p className="product-price-new">$80.00</p>
          <div className="product-hover">
            <div className="product-icon"><FaBars /></div>
            <div className="product-icon"><FaShoppingCart /></div>
            <div className="product-icon"><FaHeart /></div>
          </div>
        </div>
        <div className="product-card">
          <img src={strawberryImg} alt="Strawberry" className="product-image" />
          <h3 className="product-name">Strawberry</h3>
          <p className="product-price">$120.00</p>
          <div className="product-hover">
            <div className="product-icon"><FaBars /></div>
            <div className="product-icon"><FaShoppingCart /></div>
            <div className="product-icon"><FaHeart /></div>
          </div>
        </div>
        <div className="product-card">
          <img src={greenBeansImg} alt="Green Beans" className="product-image" />
          <h3 className="product-name">Green Beans</h3>
          <p className="product-price">$120.00</p>
          <div className="product-hover">
            <div className="product-icon"><FaBars /></div>
            <div className="product-icon"><FaShoppingCart /></div>
            <div className="product-icon"><FaHeart /></div>
          </div>
        </div>
        <div className="product-card">
          <img src={purpleCabbageImg} alt="Purple Cabbage" className="product-image" />
          <h3 className="product-name">Purple Cabbage</h3>
          <p className="product-price">$120.00</p>
          <div className="product-hover">
            <div className="product-icon"><FaBars /></div>
            <div className="product-icon"><FaShoppingCart /></div>
            <div className="product-icon"><FaHeart /></div>
          </div>
        </div>

        </div>
     
      <div className="products-grid">
        <div className="product-card">
          <div className="product-discount">30%</div>
          <img src={tomatoeImg} alt="TOMATOE" className="product-image" />
          <h3 className="product-name">TOMATOE</h3>
          <p className="product-price-old">$120.00</p>
          <p className="product-price-new">$80.00</p>
          <div className="product-hover">
            <div className="product-icon"><FaBars /></div>
            <div className="product-icon"><FaShoppingCart /></div>
            <div className="product-icon"><FaHeart /></div>
          </div>
        </div>
        <div className="product-card">
          <img src={applesredImg} alt="Apples-red" className="product-image" />
          <h3 className="product-name">Apples-red</h3>
          <p className="product-price">$120.00</p>
          <div className="product-hover">
            <div className="product-icon"><FaBars /></div>
            <div className="product-icon"><FaShoppingCart /></div>
            <div className="product-icon"><FaHeart /></div>
          </div>
        </div>
        <div className="product-card">
          <img src={fruitjuiceImg} alt="Fruit-Juice" className="product-image" />
          <h3 className="product-name">Fruit-Juice</h3>
          <p className="product-price">$120.00</p>
          <div className="product-hover">
            <div className="product-icon"><FaBars /></div>
            <div className="product-icon"><FaShoppingCart /></div>
            <div className="product-icon"><FaHeart /></div>
          </div>
        </div>
        <div className="product-card">
          <img src={brocolliImg} alt="Brocolli" className="product-image" />
          <h3 className="product-name">Brocolli</h3>
          <p className="product-price">$120.00</p>
          <div className="product-hover">
            <div className="product-icon"><FaBars /></div>
            <div className="product-icon"><FaShoppingCart /></div>
            <div className="product-icon"><FaHeart /></div>
          </div>
        </div>

        <div className="products-grid">
        <div className="product-card">
          <div className="product-discount">30%</div>
          <img src={bellPepperImg} alt="Bell Pepper" className="product-image" />
          <h3 className="product-name">Bell Pepper</h3>
          <p className="product-price-old">$120.00</p>
          <p className="product-price-new">$80.00</p>
          <div className="product-hover">
            <div className="product-icon"><FaBars /></div>
            <div className="product-icon"><FaShoppingCart /></div>
            <div className="product-icon"><FaHeart /></div>
          </div>
        </div>
        <div className="product-card">
          <img src={strawberryImg} alt="Strawberry" className="product-image" />
          <h3 className="product-name">Strawberry</h3>
          <p className="product-price">$120.00</p>
          <div className="product-hover">
            <div className="product-icon"><FaBars /></div>
            <div className="product-icon"><FaShoppingCart /></div>
            <div className="product-icon"><FaHeart /></div>
          </div>
        </div>
        <div className="product-card">
          <img src={greenBeansImg} alt="Green Beans" className="product-image" />
          <h3 className="product-name">Green Beans</h3>
          <p className="product-price">$120.00</p>
          <div className="product-hover">
            <div className="product-icon"><FaBars /></div>
            <div className="product-icon"><FaShoppingCart /></div>
            <div className="product-icon"><FaHeart /></div>
          </div>
        </div>
        <div className="product-card">
          <img src={purpleCabbageImg} alt="Purple Cabbage" className="product-image" />
          <h3 className="product-name">Purple Cabbage</h3>
          <p className="product-price">$120.00</p>
          <div className="product-hover">
            <div className="product-icon"><FaBars /></div>
            <div className="product-icon"><FaShoppingCart /></div>
            <div className="product-icon"><FaHeart /></div>
          </div>
        </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Shop;
