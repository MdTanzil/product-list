import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../context";

const Search = () => {
  const [search, setSearch] = useState("");
  const { products, setProducts } = useContext(ProductContext);
  const pref = useRef([]);
  const debounceTimeout = useRef(null);

  if (debounceTimeout.current) {
    clearTimeout(debounceTimeout.current);
  }
  useEffect(() => {
    if (pref.current.length === 0 && products.length > 0) {
      pref.current = [...products];
      console.log("Original products stored:", pref.current);
    }
  }, [products]);

  useEffect(() => {
    // Clear previous timeout if it exists
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      if (search.length == 0) {
        if (products !== pref.current) {
          setProducts(pref.current);
        }
        // console.log(products);
      } else {
        // console.log(products);
        const filtered = (pref.current || []).filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );
        console.log(filtered);

        setProducts(filtered);
      }
    }, [300]);
    return () => clearTimeout(debounceTimeout.current);
  }, [search]);

  return (
    <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
      <svg
        className="mr-2 h-5 w-5 stroke-slate-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
        placeholder="Find anything..."
        aria-label="Search components"
        id="headlessui-combobox-input-:r5n:"
        role="combobox"
        type="text"
        aria-expanded="false"
        aria-autocomplete="list"
        defaultValue
        style={{ caretColor: "rgb(107, 114, 128)" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
