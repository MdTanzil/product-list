import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductPage from "./products/ProductPage";
import ProductProvider from "./providers/ProductProvider";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductProvider>
        <ProductPage />
      </ProductProvider>
      <Footer />
    </>
  );
}

export default App;
