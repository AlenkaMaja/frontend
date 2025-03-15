//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import Charter from './components/pages/charter/Charter';
import YachtsList from './components/pages/charter/YachtsList';
import YachtSingle from './components/pages/charter/YachtSingle';
import Schools from './components/pages/charter/Schools';
import Ownership from './components/pages/charter/Ownership';
import About from './components/pages/about/About';
import Faq from './components/pages/faq/Faq';
import Weather from './components/pages/weather/Weather';
import Contact from './components/pages/contact/Contact';
import Blog from './components/pages/blog/Blog';
import BlogSingle from './components/pages/blog/BlogSingle';
import News from './components/pages/news/News';
import Category from './components/pages/blog/Category';
import CategoryPage from './components/pages/blog/CategoryPage';
import Comments from './components/pages/blog/Comments';
import Login from './components/pages/loginRegister/Login';
import SignUp from './components/pages/loginRegister/SignUp';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AuthorsPage from './components/pages/blog/AuthorsPage';
import Exchange from './components/pages/exchange/Exchange';
import Countries from './components/pages/countries/Countries';
import SingleCountry from './components/pages/countries/SingleCountry';
import Shop from './components/pages/shop/Shop';
import ProductSingle from './components/pages/shop/ProductSingle';
import CartPage from './components/pages/shop/CartPage';
import CheckoutPage from './components/pages/shop/CheckoutPage';




function App() { 
  return (
    <Router> 
      <div className="App">
        <Header />
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="/charter" element={<Charter />} />
          <Route path="/yachts" element={<YachtsList />} />
          <Route path="/yachts/:id" element={<YachtSingle />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/ownership" element={<Ownership />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/news" element={<News />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path='/author/:author' element={<AuthorsPage />} />
          <Route path="/comment/:id" element={<Comments />} />
          <Route path="/loginRegister" element={<Login />} />
          <Route path="/loginRegister" element={<SignUp />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:name" element={<SingleCountry />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductSingle />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

        </Routes>
        <Footer />
        </div>
    </Router> 
  );
}

export default App;
