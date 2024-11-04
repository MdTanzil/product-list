import { useContext } from "react";
import { ProductContext } from "../context";
import Cart from "./Cart";
import Filter from "./Filter";
import LoadingList from "./LoadingList";
import PageHeading from "./PageHeading";
import ProductCard from "./ProductCard";
import Search from "./Search";
import Sort from "./Sort";

const ProductPage = () => {
  const { products, loading } = useContext(ProductContext);
  let content;
  if (loading) {
    content = <LoadingList />;
  }
  if (products.length == 0) {
    content = <p className="text-center text-gray-500">No products found.</p>;
  }
  if (!loading && products.length > 0) {
    content = products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ));
  }
  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <PageHeading />
        <div className="mt-10">
          <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            {/* Sort & Filter*/}
            <div className="w-full">
              {/* Sort Start */}
              <Sort />
              {/* Sort End */}
              {/* Filter Start */}
              <Filter />
              {/* Filter End */}
            </div>
            {/* Search and Cart */}
            <div className="flex gap-2 items-center">
              {/* Search */}
              <Search />
              {/* Cart */}
              <Cart />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {/* Card */}
                {content}

                {/* More products... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
