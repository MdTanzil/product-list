import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductPage from "./products/ProductPage";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductPage />
      <Footer />
    </>
  );
}

export default App;
