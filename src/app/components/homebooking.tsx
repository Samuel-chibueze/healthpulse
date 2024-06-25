'use client'
import React, { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import Filter from "./filter";

const mockData = [
  {
    id: 1,
    name: "Company A",
    username: "companyA",
    verified: true,
    image: "assets/images/companyA.jpg",
    description: "A description of Company A.",
    price: 49.00,
    rating: 4.8,
    reviews: 18
  },
  {
    id: 2,
    name: "Company B",
    username: "companyB",
    verified: false,
    image: "assets/images/companyB.jpg",
    description: "A description of Company B.",
    price: 59.00,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 3,
    name: "Company C",
    username: "companyC",
    verified: true,
    image: "assets/images/companyC.jpg",
    description: "A description of Company C.",
    price: 39.00,
    rating: 4.2,
    reviews: 8
  }
  // Add more companies as needed
];

export default function HomeBooking() {
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Toggle search dropdown visibility
  const toggleSearchDropdown = () => {
    setIsSearchDropdownOpen(!isSearchDropdownOpen);
    setIsFilterDropdownOpen(false); // Close filter dropdown if open
  };

  // Toggle filter dropdown visibility
  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
    setIsSearchDropdownOpen(false); // Close search dropdown if open
  };

  // Handle click outside to close dropdowns
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current && !dropdownRef.current.contains(event.target) &&
      searchInputRef.current && !searchInputRef.current.contains(event.target)
    ) {
      setIsSearchDropdownOpen(false);
      setIsFilterDropdownOpen(false);
    }
  };

  // Handle search input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    // Simulate search functionality (you can replace this with actual API call)
    const filteredResults = mockData.filter(company =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  // Effect to add/remove click outside event listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-2 pb-10 pt-7 flex flex-col justify-center items-center">
      <form className="flex justify-center items-center space-x-2">
        <div className="relative w-[70vw] flex justify-center items-center md:w-[50vw]">
          <input
            ref={searchInputRef}
            className="p-4 w-full border-2 border-gray-300 shadow-sm rounded-xl pr-10"
            placeholder="Search bar"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="button" onClick={toggleSearchDropdown} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
            <IoIosSearch size={20} />
          </button>
        </div>
        <div className="relative" ref={dropdownRef}>
          <Filter toggleFilterDropdown={toggleFilterDropdown} />
          {isFilterDropdownOpen && (
            <div className="absolute right-0 mt-2 w-[850px] bg-white border border-gray-200 shadow-lg rounded-lg z-10">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 p-4">
                {/* Render filter options here */}
              </div>
            </div>
          )}
          {isSearchDropdownOpen && searchResults.length > 0 && (
            <div className="absolute right-0 mt-2 w-[850px] bg-white border border-gray-200 shadow-lg rounded-lg z-10">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 p-4">
                {searchResults.map(company => (
                  <div
                    key={company.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden h-[50px] shadow-md flex justify-between items-center"
                  >
                    <div className="relative">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-48 object-cover"
                      />
                      {company.verified && (
                        <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 m-2 rounded-md text-xs font-semibold">
                          Verified
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex justify-center items-center">
                      <h2 className="text-lg font-semibold">{company.name}</h2>
                      <p className="text-gray-500 mb-2">@{company.username}</p>
                      <div className="flex justify-between">
                        <div className="text-lg font-semibold">${company.price.toFixed(2)}</div>
                        <div className="flex  justify-end items-center space-x-1">
                          {[...Array(Math.floor(company.rating))].map((_, index) => (
                            <ion-icon key={index} name="star" className="text-yellow-400"></ion-icon>
                          ))}
                          {[...Array(5 - Math.floor(company.rating))].map((_, index) => (
                            <ion-icon key={index} name="star-outline" className="text-gray-300"></ion-icon>
                          ))}
                          <span className="text-gray-600 ml-1">{company.rating.toFixed(1)} ({company.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
