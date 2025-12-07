import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CartIcon from "../Icons/CartIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../modal/loginModal";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const cartProducts = useSelector((store) => store.product.cartProducts);
  const cartItemCount = Object.keys(cartProducts).reduce(
    (total, id) => total + cartProducts[id].quantity,
    0
  );

  return (
    <div className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 gap-6">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-gray-900 whitespace-nowrap"
        >
          Nova<span className="text-blue-600">Edge</span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-xl">
          <SearchBar />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          
          {/* Conditional Login / Logout */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Hi, User</span>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-gray-200 transition"
            >
              Login
            </button>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative cursor-pointer">
            <CartIcon />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-xs px-1.5 py-[1px] rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Login Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onLogin={() => setIsOpen(false)} // optional callback after successful login
      />
    </div>
  );
};

export default Navbar;
