// Filter.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { CiFilter } from "react-icons/ci";

const Filter: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const filterButtonRef = useRef<HTMLButtonElement>(null);

    // Function to toggle dropdown open/close
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    // Effect to handle click outside dropdown and filter icon
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Close dropdown if clicking outside of it or on filter icon
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                filterButtonRef.current && !filterButtonRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        // Add event listener when component mounts
        document.addEventListener("mousedown", handleClickOutside as EventListener);

        // Clean up event listener when component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside as EventListener);
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
