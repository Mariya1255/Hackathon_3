'use client';
import Hero from "./components/hero";
import Offer from "./components/offer";
import FeaturedProducts from "./components/FeatureProducts";
import LatestProducts from "./components/Latest-Products";
import Unique from "./components/unique";
import TrendingProducts from "./components/trending-products";
import Discount from "./components/Discount";
import TopCategories from "./components/Top-Categories";
import BlogSection from "./components/BlogSection";
import Newslater from "./components/news-letter";
import { Header } from "./components/header";
import Footer from "./components/footer";
import Cart from "./components/cart";


function Homepage() {
    return (<div>
      {/* Comment Section */}
      <Header />
      <Hero />
      {/* Feature Products */}
      <FeaturedProducts />
      <LatestProducts />
      <Offer />
      <Unique />
      <TrendingProducts />
      <Discount />
      <TopCategories />
      <Newslater />
      <Cart />
      <BlogSection />
      <Footer />
    </div>);
}
export default Homepage;

