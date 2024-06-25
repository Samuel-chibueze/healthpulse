// Filter.js
"use client"
// Filter.js

import React, { useState, useRef, useEffect } from 'react';
import { CiFilter } from "react-icons/ci";

const Filter = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const filterButtonRef = useRef(null);

    // Function to toggle dropdown open/close
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Effect to handle click outside dropdown and filter icon
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close dropdown if clicking outside of it or on filter icon
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                filterButtonRef.current && !filterButtonRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        // Add event listener when component mounts
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up event listener when component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <button
                ref={filterButtonRef}
                type="button"
                onClick={toggleDropdown}
                className="p-2 border-2 border-gray-300 shadow-sm rounded-xl"
            >
                <CiFilter size={24} />
            </button>
            {isDropdownOpen && (
                <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Filter Option 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Filter Option 2</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Filter Option 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Filter;
