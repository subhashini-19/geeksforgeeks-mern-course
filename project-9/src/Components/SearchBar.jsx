import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const timerId = useRef(null);
  const wrapperRef = useRef(null); // 🔥 REF TO DETECT OUTSIDE CLICK

  async function getApiData(query) {
    if (!query.trim()) {
      setSearchResults([]);
      setShowDropdown(false); // 🔥 Close dropdown when empty
      return;
    }

    setIsLoading(true);
    const apiData = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );
    const jsonData = await apiData.json();

    setSearchResults(jsonData?.products || []);
    setIsLoading(false);

    setShowDropdown(true); // 🔥 Show dropdown only when API returns
  }

  useEffect(() => {
    if (timerId.current) clearTimeout(timerId.current);

    timerId.current = setTimeout(() => {
      getApiData(searchQuery);
    }, 400);
  }, [searchQuery]);

  // 🔥 CLICK OUTSIDE HANDLER
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false); // Close dropdown
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full"> {/* 🔥 Wrapper */}
      <input
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setShowDropdown(true); // reopen when typing again
        }}
        type="text"
        placeholder="Search products, brands and more..."
        className="
          w-full pl-4 pr-4 py-2
          rounded-full bg-gray-50
          border border-gray-300
          text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white
          transition
        "
      />

      {/* Suggestions Dropdown */}

      {showDropdown && (
  <div
    className="
      absolute left-0 right-0 mt-2
      bg-white shadow-lg rounded-xl
      border border-gray-200
      max-h-64 flex items-center justify-center
      z-50
    "
    style={{ height: "100px" }}
  >
    {isLoading ? (
      <p className="text-gray-500">Loading...</p>
    ) : (
      <p className="text-gray-500">No results found</p>
    )}
  </div>
)}
      {showDropdown && searchResults.length > 0 && !isLoading && (
        <div
          className="
            absolute left-0 right-0 mt-2
            bg-white shadow-lg rounded-xl
            border border-gray-200
            max-h-64 overflow-y-auto
            z-50
          "
        >
          {searchResults.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="
                flex items-center gap-3 px-4 py-2
                cursor-pointer hover:bg-gray-100 transition
              "
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-10 h-10 rounded object-cover"
              />
              <p className="text-sm text-gray-700">{product.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
